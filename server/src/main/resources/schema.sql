CREATE TABLE contact
(
itemId varchar(11) NOT NULL,
itemFirstName varchar(100) NOT NULL,
itemFamilyName varchar(100) NOT NULL,
itemAddress varchar(100) DEFAULT NULL,
itemPostnumber varchar(5) DEFAULT NULL,
itemPostCity varchar(100) DEFAULT NULL,
itemEmail varchar(100) DEFAULT NULL,
itemPhonenumber varchar(20) DEFAULT NULL,
itemMsgClient text DEFAULT NULL,
itemMsgInternal text DEFAULT NULL,
PRIMARY KEY (itemId)
);