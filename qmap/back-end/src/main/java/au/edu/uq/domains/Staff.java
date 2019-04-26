package au.edu.uq.domains;

import java.sql.Date;
import java.sql.ResultSet;
import java.sql.Time;
import java.text.MessageFormat;
import java.util.Calendar;

public class Staff {
    private Integer id;
    private String name;
    private String email;
    private String category;
    private String campus;
    private String building;
    private int level;
    private String seat;
    private String project;
    private String supervisor;
    private String role;
    private boolean PTorNot; // whether staff is part time or full time employed (true if staff is part time, false if staff is full time)
    private Date startDate;
    private Date endDate;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getCampus() {
        return campus;
    }

    public void setCampus(String campus) {
        this.campus = campus;
    }

    public String getBuilding() {
        return building;
    }

    public void setBuilding(String building) {
        this.building = building;
    }

    public int getLevel() {
        return level;
    }

    public void setLevel(int level) {
        this.level = level;
    }

    public String getSeat() {
        return seat;
    }

    public void setSeat(String seat) {
        this.seat = seat;
    }

    public String getProject() {
        return project;
    }

    public void setProject(String project) {
        this.project = project;
    }

    public String getSupervisor() {
        return supervisor;
    }

    public void setSupervisor(String supervisor) {
        this.supervisor = supervisor;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public boolean isPTorNot() {
        return PTorNot;
    }

    public void setPTorNot(boolean PTorNot) {
        this.PTorNot = PTorNot;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public String toString(){
        return MessageFormat.format("{0} at {1}, {2}, {3} on seat {4}: {5}, {6}, from {7} to {8}, {9}, {10}, {11}, {12} (employed part time: {13})",
                this.name,this.campus, this.building, this.level, this.seat, this.id, this.email, this.startDate, this.endDate, this.category, this.role, this.project, this.supervisor, this.PTorNot);
    }
}
