package com.epoch.drinkingbuddy.generated;

import java.util.Arrays;
import java.util.List;
import org.unimodules.core.interfaces.Package;

public class BasePackageList {
  public List<Package> getPackageList() {
    return Arrays.<Package>asList(
        new expo.modules.ads.admob.AdMobPackage(),
        new expo.modules.application.ApplicationPackage(),
        new expo.modules.constants.ConstantsPackage(),
        new expo.modules.notifications.NotificationsPackage(),
        new expo.modules.permissions.PermissionsPackage(),
        new expo.modules.sqlite.SQLitePackage()
    );
  }
}
