package au.edu.uq.services.impl;

import au.edu.uq.domains.Staff;
import au.edu.uq.repositories.StaffDao;
import au.edu.uq.services.StaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StaffServiceImpl implements StaffService {
    @Autowired
    private StaffDao staffDao;

    @Override
    public Staff getStaffByEmail(String email){
        int id = staffDao.getIDByEmail(email);
        return staffDao.getStaffByID(id);
    }

    @Override
    public String getNameByEmail(String email){
        return staffDao.getNameByEmail(email);
    }

    @Override
    public String getPeriodByEmail(String email){
        return staffDao.getPeriodByEmail(email);
    }

    @Override
    public String getLocationByEmail(String email){
        return staffDao.getLocationByEmail(email);
    }


}
