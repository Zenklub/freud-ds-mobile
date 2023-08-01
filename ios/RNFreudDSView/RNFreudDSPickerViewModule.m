#import "React/RCTViewManager.h"
#import <React/RCTUIManager.h>

#import "RCTBaseTextInputView.h"
#import "RCTUITextField.h"

@interface RCT_EXTERN_MODULE(RNFreudDSPickerViewManager, RCTViewManager)

RCT_EXPORT_VIEW_PROPERTY(options, NSArray)
RCT_EXPORT_VIEW_PROPERTY(inputNativeID, NSString)
RCT_EXPORT_VIEW_PROPERTY(onValueChange, RCTBubblingEventBlock)

@end

