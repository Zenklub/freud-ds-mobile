#import "React/RCTViewManager.h"

@interface RCT_EXTERN_MODULE(RNFreudDSViewManager, RCTViewManager)

RCT_EXPORT_VIEW_PROPERTY(color, NSString)

@end

@implementation RCT_EXTERN_MODULE(RNFreudDSViewManager, RCTViewManager)
+ (BOOL) requiresMainQueueSetup {
  return YES;
}

@end
