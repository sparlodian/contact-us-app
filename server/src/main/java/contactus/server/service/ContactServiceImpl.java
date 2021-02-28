package contactus.server.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import contactus.server.dao.ContactDAO;
import contactus.server.model.Contact;
import contactus.server.model.ContactDTO;

import javax.transaction.Transactional;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Transactional
@Service(value = "contactService")
public class ContactServiceImpl implements ContactService {
	
	@Autowired
	private ContactDAO contactDAO;

	public List<Contact> findAll() {
		List<Contact> list = new ArrayList<>();
		contactDAO.findAll().iterator().forEachRemaining(list::add);
		return list;
	}

	@Override
	public void delete(int id) {
		contactDAO.deleteById(id);
	}

	@Override
	public Contact findOne(String contactFirstname) {
		return contactDAO.findByFirstname(contactFirstname);
	}

	@Override
	public Contact findById(int id) {
		Optional<Contact> optional = contactDAO.findById( id);
		return optional.isPresent() ? optional.get() : null;
	}

    @Override
    public ContactDTO update(ContactDTO contactDto) {
    	Contact contact = findById(contactDto.getId());
        if(contact != null) {
            BeanUtils.copyProperties(contactDto, contact, "password", "contactname");
            contactDAO.save(contact);
        }
        return contactDto;
    }

    @Override
    public Contact save(ContactDTO contact) {
    	Contact newContact = new Contact();
	    newContact.setFirstname(contact.getFirstname());
	    newContact.setFamilyname(contact.getFamilyname());
	    newContact.setAddress(contact.getAddress());
	    newContact.setPostnumber(contact.getPostnumber());
	    newContact.setPostcity(contact.getPostcity());
	    newContact.setPhonenumber(contact.getPhonenumber());
	    newContact.setEmail(contact.getEmail());
	    newContact.setPhonenumber(contact.getPhonenumber());
	    newContact.setMsgclient(contact.getMsginternal());
	    LocalDateTime timestamp = LocalDateTime.now();
	    System.out.println(timestamp);
	    newContact.setLocaldatetime(timestamp);
        return contactDAO.save(newContact);
    }
}