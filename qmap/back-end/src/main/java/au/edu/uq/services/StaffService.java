package au.edu.uq.services;

import au.edu.uq.domains.Staff;

public interface StaffService {

    Staff getStaffByEmail(String email);

    String getNameByEmail(String email);

    String getPeriodByEmail(String email);

    String getLocationByEmail(String email);
}
