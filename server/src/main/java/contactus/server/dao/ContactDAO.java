package contactus.server.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import contactus.server.model.Contact;

@Repository
public interface ContactDAO extends CrudRepository<Contact, Integer> {

    Contact findByFirstname(String firstName);
}