package au.edu.uq.services.impl;

import au.edu.uq.repositories.StaffDao;
import au.edu.uq.services.StaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StaffServiceImpl implements StaffService {
    @Autowired
    private StaffDao staffDao;

    @Override
    public String getEmailByName(String name){
        return staffDao.getEmailByName(name);
    }
}
