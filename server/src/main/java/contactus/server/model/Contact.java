package contactus.server.model;

import javax.persistence.*;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name = "contact")
public class Contact {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column
    private String firstname;
    @Column
    private String familyname;
    @Column
    private String address;
    @Column
    private String postnumber;
    @Column
    private String postcity;
    @Column
    private String email;
    @Column
    private String phonenumber;
    @Column
    private String msgclient;
    @Column
    private String msginternal;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getFamilyname() {
		return familyname;
	}
	public void setFamilyname(String familyname) {
		this.familyname = familyname;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getPostnumber() {
		return postnumber;
	}
	public void setPostnumber(String postnumber) {
		this.postnumber = postnumber;
	}
	public String getPostcity() {
		return postcity;
	}
	public void setPostcity(String postcity) {
		this.postcity = postcity;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhonenumber() {
		return phonenumber;
	}
	public void setPhonenumber(String phonenumber) {
		this.phonenumber = phonenumber;
	}
	public String getMsgclient() {
		return msgclient;
	}
	public void setMsgclient(String msgclient) {
		this.msgclient = msgclient;
	}
	public String getMsginternal() {
		return msginternal;
	}
	public void setMsginternal(String msginternal) {
		this.msginternal = msginternal;
	}
    
	
}
