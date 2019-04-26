package au.edu.uq.repositories;

import au.edu.uq.domains.Staff;

public interface StaffDao {

    int getIDByEmail(String email);

    String getNameByEmail(String email);

    String getPeriodByEmail(String email);

    String getLocationByEmail(String email);

    Staff getStaffByID(int ID);

}
