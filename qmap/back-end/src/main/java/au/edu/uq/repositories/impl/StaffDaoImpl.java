package au.edu.uq.repositories.impl;


import au.edu.uq.domains.Staff;
import au.edu.uq.repositories.StaffDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.MessageFormat;
import java.util.Date;
import java.util.List;

@Repository
public class StaffDaoImpl implements StaffDao {

    @Autowired
    private JdbcTemplate template;

    @Override
    public int getIDByEmail(String email) {
        return template.queryForObject("select ID from Staff where Email = ?", new Object[]{email}, Integer.class);
    }

    @Override
    public String getNameByEmail(String email){
        return template.queryForObject("select Name from Staff where Email = ?", new Object[]{email}, String.class);
    }

    @Override
    public String getPeriodByEmail(String email){
        Date startDate = template.queryForObject("select StartDate from Staff where Email = ?", new Object[]{email}, Date.class);
        Date endDate = template.queryForObject("select EndDate from Staff where Email = ?", new Object[]{email}, Date.class);
        return MessageFormat.format("from {0} to {1}", startDate, endDate);
    }

    @Override
    public String getLocationByEmail(String email){
        String campus = template.queryForObject("select Campus from Staff where Email = ?", new Object[]{email}, String.class);
        String building = template.queryForObject("select Building from Staff where Email = ?", new Object[]{email}, String.class);
        int level = template.queryForObject("select Level from Staff where Email = ?", new Object[]{email}, Integer.class);
        String category = template.queryForObject("select Category from Staff where Email = ?", new Object[]{email}, String.class);
        String seat = template.queryForObject("select Seat from Staff where Email = ?", new Object[]{email}, String.class);
        return MessageFormat.format("at {0} seat {1}, on {2}, level {3}, on {4} campus", category, seat, building, level, campus);
    }

    @Override
    public Staff getStaffByID(int ID) {
        List<Staff> list = template.query("select * from Staff where id = ?", new RowMapper<Staff>() {
            @Override
            public Staff mapRow(ResultSet rs, int rowNum) throws SQLException {
                Staff staff = new Staff();
                staff.setId(rs.getInt("id"));
                staff.setName(rs.getString("name"));
                staff.setEmail(rs.getString("email"));
                staff.setCategory(rs.getString("category"));
                staff.setProject(rs.getString("project"));
                staff.setCampus(rs.getString("campus"));
                staff.setBuilding(rs.getString("building"));
                staff.setLevel(rs.getInt("level"));
                staff.setSeat(rs.getString("seat"));
                staff.setRole(rs.getString("role"));
                staff.setSupervisor(rs.getString("supervisor"));
                staff.setPTorNot(rs.getBoolean("PTorNot"));
                staff.setStartDate(rs.getDate("startDate"));
                staff.setEndDate(rs.getDate("endDate"));
                return staff;
            }
        }, new Object[]{ID});
        return list.get(0);
    }
}
