package au.edu.uq.repositories.impl;


import au.edu.uq.domains.Staff;
import au.edu.uq.repositories.StaffDao;
import org.apache.poi.ss.formula.functions.T;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@Repository
public class StaffDaoImpl implements StaffDao {

    @Autowired
    private JdbcTemplate template;

    @Override
    public String getEmailByName(String name) {
        String email = template.queryForObject("select Email from Staff where Name = ?", new Object[]{name}, String.class);
        return email;
    }

    public Staff getStaffByID (int ID){

    List<Staff> list = template.query("select * from Staff where id = ?", new RowMapper<Staff>() {
        @Override
        public Staff mapRow(ResultSet rs, int rowNum) throws SQLException {
            Staff staff = new Staff();
            staff.setId(rs.getInt("id"));
            staff.setName(rs.getString("name"));
            staff.setEmail(rs.getString("email"));
            return staff;
        }
    }, new Object[]{ID});
    return list.get(0);
    }
}
