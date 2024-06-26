
-- Script was generated by Devart dbForge Studio for MySQL, Version 6.0.128.0
-- Product home page: http://www.devart.com/dbforge/mysql/studio
-- Script date 07/11/2023 1:54:56 pm
-- Server version: 5.5.5-10.4.28-MariaDB
-- Client version: 4.1

USE boat_reservation;

DELIMITER $$

CREATE DEFINER = 'root'@'localhost'
PROCEDURE add_boat_owner (IN `boat_owner_fname` varchar(255), IN `boat_owner_lname` varchar(255), IN `boat_owner_mname` varchar(255), IN `boat_owner_email` varchar(255), IN `boat_owner_address` varchar(255), IN `boat_owner_gender` varchar(255), IN `boat_owner_dob` date, IN `boat_owner_nationality` varchar(255), IN `boat_owner_cpnum` varchar(255), IN `boat_owner_img` longblob)
BEGIN
  INSERT INTO boat_owner (boat_owner_fname,
  boat_owner_lname,
  boat_owner_mname,
  boat_owner_email,
  boat_owner_address,
  boat_owner_gender,
  boat_owner_dob,
  boat_owner_nationality,
  boat_owner_cpnum,
  boat_owner_img,
  boat_owner_del)
    VALUES (boat_owner_fname, boat_owner_lname, boat_owner_mname, boat_owner_email, boat_owner_address, boat_owner_gender, boat_owner_dob, boat_owner_nationality, boat_owner_cpnum, boat_owner_img, 1);
END
$$

CREATE PROCEDURE add_reservation (IN `fname` varchar(50), IN `lname` varchar(50), IN `mname` varchar(50), IN `date_reserved` timestamp(6), IN `destinaton` varchar(50), IN `date_tohop` date, IN `tour_guide` boolean)
SQL SECURITY INVOKER
BEGIN
  INSERT INTO `reservation` (`reservation_id`,
  `fname`,
  `lname`,
  `mname`,
  `date_time_reserved`,
  `destination`,
  `boat_selection`,
  `data_time_tohop`,
  `tourguide`,
  `show_me`)
    VALUES ('', 'fname', 'lname', 'mname', 'date_reserved', 'destination', 'boat_selection', 'date_tohop', 'tour_guide', '1');
  SET @lastID = LAST_INSERT_ID();

  INSERT INTO `boat_owner_view` (`boat_owner_view_id`,
  `boat_owner_id`,
  `reservation_id`)
    SELECT
      '',
      1,
      @lastID
    FROM `reservation`
    WHERE `reservation_id` = @lastID;

  INSERT INTO `frontdesk_view` (`frontdesk_view_id`, `frontdesk_id`, `reservation_id`)
    SELECT
      '',
      1,
      @lastID
    FROM `reservation`
    WHERE `reservation_id` = @lastID;

  IF (tour_guide = 'true') THEN
    INSERT INTO `tour_guide_view` (`tour_guide_view_id`, `tour_guide_id`, `reservation_id`)
      SELECT
        '',
        1,
        @lastID
      FROM `reservation`
      WHERE `reservation_id` = @lastID;
  END IF;
END
$$

CREATE DEFINER = 'root'@'localhost'
PROCEDURE add_tourist (IN firstName varchar(255),
IN lastName varchar(255),
IN email varchar(255),
IN dateOfBirth date,
IN gender char(1),
IN phone varchar(20),
IN address varchar(255),
IN profilePicture blob)
BEGIN
  INSERT INTO touristaccount (firstName, lastName, email, dateOfBirth,
  gender, phone, address, profilePicture, tourist_del)
    VALUES (firstName, lastName, email, dateOfBirth, gender, phone, address, profilePicture, TRUE);
END
$$

CREATE DEFINER = 'root'@'localhost'
PROCEDURE add_tour_guide (IN `tg_fname` varchar(255), IN `tg_lname` varchar(255), IN `tg_mname` varchar(255), IN `tg_email` varchar(255), IN `tg_address` varchar(255), IN `tg_gender` char(1), IN `tg_dob` date, IN `tg_status` varchar(255), IN `tg_img` blob, IN `tg_nationality` varchar(255), IN `tg_cpnum` varchar(20))
BEGIN
  INSERT INTO `tour_guide` (`tg_id`, `tg_fname`, `tg_lname`, `tg_mname`,
  `tg_email`, `tg_address`, `tg_gender`, `tg_dob`,
  `tg_status`, `tg_img`, `tg_nationality`, `tg_cpnum`, `tg_del`)
    VALUES (NULL, tg_fname, tg_lname, tg_mname, tg_email, tg_address, tg_gender, tg_dob, tg_status, tg_img, tg_nationality, tg_cpnum, 1);
END
$$

CREATE DEFINER = 'root'@'localhost'
PROCEDURE del_boat_owner (IN owner_id int)
BEGIN
  UPDATE boat_owner
  SET boat_owner_del = FALSE
  WHERE boat_owner_id = owner_id;
END
$$

CREATE DEFINER = 'root'@'localhost'
PROCEDURE del_tourist (IN `id` int(255))
  UPDATE touristaccount
  SET tourist_del = 0
  WHERE touristaccount.id = id
$$

CREATE DEFINER = 'root'@'localhost'
PROCEDURE del_tour_guide (IN `id` int)
  UPDATE tour_guide
  SET tg_del = FALSE
  WHERE tour_guide.tg_id = id
$$

CREATE DEFINER = 'root'@'localhost'
PROCEDURE edit_boat_owner (IN `owner_fname` varchar(255), IN `owner_lname` varchar(255), IN `owner_mname` varchar(255), IN `owner_email` varchar(255), IN `owner_address` varchar(255), IN `owner_gender` char(1), IN `owner_dob` date, IN `owner_nationality` varchar(255), IN `owner_cpnum` varchar(20), IN `owner_img` blob, IN `owner_id` int)
BEGIN
  UPDATE boat_owner
  SET boat_owner_fname = owner_fname,
      boat_owner_lname = owner_lname,
      boat_owner_mname = owner_mname,
      boat_owner_email = owner_email,
      boat_owner_address = owner_address,
      boat_owner_gender = owner_gender,
      boat_owner_dob = owner_dob,
      boat_owner_nationality = owner_nationality,
      boat_owner_cpnum = owner_cpnum,
      boat_owner_img = owner_img
  WHERE boat_owner_id = owner_id;
END
$$

CREATE DEFINER = 'root'@'localhost'
PROCEDURE edit_tour_guide (IN tg_fname varchar(255),
IN tg_lname varchar(255),
IN tg_mname varchar(255),
IN tg_email varchar(255),
IN tg_address varchar(255),
IN tg_gender char(1),
IN tg_dob date,
IN tg_status varchar(255),
IN tg_nationality varchar(255),
IN tg_cpnum varchar(20),
IN tg_img blob,
IN tg_id int)
BEGIN
  UPDATE tour_guide
  SET tg_fname = tg_fname,
      tg_lname = tg_lname,
      tg_mname = tg_mname,
      tg_email = tg_email,
      tg_address = tg_address,
      tg_gender = tg_gender,
      tg_dob = tg_dob,
      tg_status = tg_status,
      tg_nationality = tg_nationality,
      tg_cpnum = tg_cpnum,
      tg_img = tg_img
  WHERE tg_id = tg_id;
END
$$

CREATE PROCEDURE show_boat_owner ()
SQL SECURITY INVOKER
  SELECT
    *
  FROM boat_owner
  WHERE boat_owner_del = 1
$$

CREATE DEFINER = 'root'@'localhost'
PROCEDURE show_tourist ()
  SELECT
    *
  FROM touristaccount
  WHERE touristaccount.tourist_del = 1
$$

CREATE PROCEDURE show_tour_guide ()
SQL SECURITY INVOKER
  SELECT
    *
  FROM `tour_guide`
  WHERE tg_del = 1
$$

DELIMITER ;