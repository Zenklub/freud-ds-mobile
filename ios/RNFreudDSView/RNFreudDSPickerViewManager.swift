//
//  RNFreudDSPickerViewManager.swift
//  react-native-freud-ds
//
//  Created by Erick on 06/07/23.
//

@objc(RNFreudDSPickerViewManager)
class RNFreudDSPickerViewManager: RCTViewManager {
    @objc
    override static func requiresMainQueueSetup() -> Bool {
        return true
    }
    
    override func view() -> (FreudDSPickerView) {
        return FreudDSPickerView(bridge: self.bridge)
    }
}

struct PickerItem {
    let label: String
    let value: String?
}

@objc(FreudDSPickerView)
class FreudDSPickerView: UIView {
    var onValueChange: RCTBubblingEventBlock?
    
    var picker: UIPickerView?
    var currentInputNativeID: String? = nil
    var bridge: RCTBridge!
    var view: UIView!
    var items: [PickerItem] = []
    
    init(bridge: RCTBridge) {
        super.init(frame: .infinite)
        
        self.bridge = bridge
        
        let picker = UIPickerView()
        
        picker.delegate = self
        picker.dataSource = self

        self.view = UIView(frame: CGRect(x: 100, y: 100, width: 100, height: 100))
        
        self.addSubview(self.view)
        
        self.picker = picker
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
    }
    
    private func addInputView() {
        DispatchQueue.main.async {
            let weekSelf = self
            
            self.bridge.uiManager.rootView(forReactTag: self.reactTag) { rootView in
                guard let input = weekSelf.bridge.uiManager.view(forNativeID: weekSelf.inputNativeID, withRootTag: rootView?.reactTag) as? RCTBaseTextInputView else {
                    return print("TextInput with nativeID \(weekSelf.inputNativeID ?? "") not found")
                }
                
                input.backedTextInputView.inputView = weekSelf.picker
                input.backedTextInputView.reloadInputViews()
                
                weekSelf.currentInputNativeID = weekSelf.inputNativeID
            }
        }
        
    }
    
    private func tryToRemoveInputView() {
        DispatchQueue.main.async {
            let weekSelf = self
            
            self.bridge.uiManager.rootView(forReactTag: self.reactTag) { rootView in
                guard let input = weekSelf.bridge.uiManager.view(forNativeID: weekSelf.currentInputNativeID, withRootTag: rootView?.reactTag) as? RCTBaseTextInputView else {
                    return print("TextInput with nativeID \(weekSelf.inputNativeID ?? "") not found")
                }
                
                input.backedTextInputView.inputView = nil
                
                weekSelf.currentInputNativeID = nil
            }
        }
    }
    
    private func updateSelected() {
        let selectedIndex = self.items.firstIndex(where: {$0.value == selected}) ?? 0
        self.picker?.selectRow(selectedIndex, inComponent: 0, animated: true)
    }
    
    private func updateInputNativeID() {
        if self.currentInputNativeID != nil {
            // Remove previuous input view
//            self.tryToRemoveInputView()
        }
        
        guard let inputNativeID = self.inputNativeID else {
            return
        }
        
        if !inputNativeID.isEmpty {
            self.addInputView()
        }
    }
    
    @objc var selected: String? = "" {
        didSet {
            updateSelected()
            updateInputNativeID()
            picker?.setNeedsFocusUpdate()
        }
    }
    
    
    @objc var inputNativeID: String? = "" {
        didSet {
            updateInputNativeID()
            picker?.setNeedsFocusUpdate()
        }
    }
    
    @objc func setOnValueChange(_ onValueChange: RCTBubblingEventBlock?) {
        self.onValueChange = onValueChange
    }
    
    @objc var options: [[String:String]] = [] {
        didSet {
            self.items = []
            
            for option in options {
                if option.index(forKey: "label") != nil {
                    let label = option["label"]
                    let value = option["value"] ?? nil
                    
                    let item = PickerItem(label: label!, value: value)
                    
                    self.items.append(item)
                }
            }
            
            guard let picker = self.picker else { return }
            
            updateSelected()
            updateInputNativeID()
            picker.setNeedsFocusUpdate()
        }
    }
    
}

extension FreudDSPickerView: UIPickerViewDelegate, UIPickerViewDataSource {
    
    func numberOfComponents(in pickerView: UIPickerView) -> Int {
        return 1
    }
    
    func pickerView(_ pickerView: UIPickerView, numberOfRowsInComponent component: Int) -> Int {
        return items.count
    }
    
    func pickerView(_ pickerView: UIPickerView, titleForRow row: Int, forComponent component: Int) -> String? {
        return items[row].label
    }
    
    func pickerView(_ pickerView: UIPickerView, didSelectRow row: Int, inComponent component: Int) {
        if self.onValueChange != nil {
            let item = items[row]

            let event = ["value": item.value]
            self.onValueChange!(event as [AnyHashable : Any])
        }
    }
}
