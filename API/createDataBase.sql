DROP TABLE IF EXISTS users;

CREATE TABLE users
(
  id        INT AUTO_INCREMENT PRIMARY KEY,
  email     VARCHAR(255) NOT NULL UNIQUE,
  password  TEXT         NOT NULL
);

INSERT INTO users (email, password)
VALUES ('jliu187@uottawa.ca', '000000');



create table pastBills(
    user varchar(255),
    type text,
    category text,
    name text,
    month int,
    year int,
    date_of_bill date,
    monthly_expect decimal(8,2),
    amount decimal (8,2),
    bill_id MEDIUMINT  AUTO_INCREMENT,
    primary key(bill_id)
);
