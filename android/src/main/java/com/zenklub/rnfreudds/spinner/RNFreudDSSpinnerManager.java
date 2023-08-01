package com.zenklub.rnfreudds.spinner;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.bridge.ReadableArray;

public class RNFreudDSSpinnerManager extends SimpleViewManager<FreudDSSpinner> {
    public static final String REACT_CLASS = "RNFreudDSSpinner";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected FreudDSSpinner createViewInstance(ThemedReactContext context) {
        return new FreudDSSpinner(context);
    }

    @ReactProp(name = "options")
    public void setValues(FreudDSSpinner view, ReadableArray options) {
        view.setOptions(options);
    }

    @ReactProp(name = "selected")
    public void setSelected(FreudDSSpinner view, String selected) {
        view.setSelected(selected);
    }
}
