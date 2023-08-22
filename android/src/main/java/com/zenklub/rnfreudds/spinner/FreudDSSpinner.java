package com.zenklub.rnfreudds.spinner;


import android.content.Context;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;

import androidx.appcompat.widget.AppCompatSpinner;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.events.RCTModernEventEmitter;

import java.util.ArrayList;
import java.util.Map;

public class FreudDSSpinner extends AppCompatSpinner {

    private Context mContext;
    private boolean firstEventFired = false;
    private int mSelected = 0;
    private int selected;

    private ReadableArray options;

    public FreudDSSpinner(ThemedReactContext context) {
        super(context, 0);
        mContext = context;
        setOnItemSelectedListener(ON_ITEM_SELECTED_LISTENER);
    }

    public void setOptions(ReadableArray options) {
        this.options = options;

        ArrayList<String> spinnerArray = new ArrayList<String>();
        for (int i = 0; i < options.size(); i++) {
            ReadableMap option = options.getMap(i);
            String label = option.getString("label");
            spinnerArray.add(label);
        }

        ArrayAdapter<String> spinnerArrayAdapter = new ArrayAdapter<String>(mContext,
                android.R.layout.simple_spinner_item, spinnerArray);
        spinnerArrayAdapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        setAdapter(spinnerArrayAdapter);
        setSelection(mSelected);
    }

    public void setSelected(String value) {
        int index = this.getIndexWithValue(value);
        if (index == -1 || (selected == mSelected && selected == this.selected)) {
            return;
        }
        mSelected = selected;
        setSelection(mSelected);
    }

    private ReadableMap getOptionByValue(String value) {
        if (this.options != null && value != null) {
            for (int i = 0; i < options.size(); i++) {
                ReadableMap option = options.getMap(i);
                String optionValue = option.getString("value");

                if (value.equals(optionValue)) {
                    return option;
                }
            }
        }

        return null;
    }

    private int getIndexWithValue(String value) {
        if (this.options != null && value != null) {
            for (int i = 0; i < options.size(); i++) {
                ReadableMap option = options.getMap(i);
                String optionValue = option.getString("value");

                if (value.equals(optionValue)) {
                    return i;
                }
            }
        }

        return -1;
    }

    private final AdapterView.OnItemSelectedListener ON_ITEM_SELECTED_LISTENER =
        new AdapterView.OnItemSelectedListener() {
            @Override
            public void onItemSelected(AdapterView<?> parent, View view, int pos, long id) {
                selected = pos;
                // It always fire this event when the component starts, thus we need to surpress
                // the first event
                if (!firstEventFired) {
                    firstEventFired = true;
                    return;
                }

                ReadableMap option = options.getMap(pos);
                String selectedValue = option.getString("value");

                WritableMap event = Arguments.createMap();
                event.putString("value", selectedValue);
                ReactContext reactContext = (ReactContext)getContext();

                reactContext
                        .getJSModule(RCTModernEventEmitter.class)
                        .receiveEvent(getId(), "topChange", event);
            }

            @Override
            public void onNothingSelected(AdapterView<?> parent) {}
        };

    public Map getExportedCustomBubblingEventTypeConstants() {
        return MapBuilder.builder().put(
                "topChange",
                MapBuilder.of(
                        "phasedRegistrationNames",
                        MapBuilder.of("bubbled", "onValueChange")
                )
        ).build();
    }

    private final Runnable mLayoutRunnable = new Runnable() {
        @Override
        public void run() {
            measure(MeasureSpec.makeMeasureSpec(getWidth(), MeasureSpec.EXACTLY),
                    MeasureSpec.makeMeasureSpec(getHeight(), MeasureSpec.EXACTLY));
            layout(getLeft(), getTop(), getRight(), getBottom());
        }
    };

    @Override
    public void requestLayout() {
        super.requestLayout();
        post(mLayoutRunnable);
    }
}
