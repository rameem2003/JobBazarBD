CREATE DATABASE jobbazarbd;
USE jobbazarbd;


-- Users
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` enum('user','job_provider') DEFAULT 'user',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
)

-- Insert
INSERT INTO users (id,name,email,password,role,created_at)
VALUES
(1,'rameem','rameem2019@gmail.com','$2b$10$4TbWhqUWUIKw067D6d2sVeupRyz9ms6X39BmfGDFca/WcxnPhJNE6','user','2025-02-13 19:38:06'),
(2,'Mahmood Hassan Rameem','rameem2003@gmail.com','$2b$10$NCUh0bWLRgOVdUCLO2CDYO0kwCGCi/mLWMVOkgiFbjoboKo0LyjdS','job_provider','2025-02-13 19:39:40'),
(4,'Fahmida Yeasmin','fahmidayeasmin.me@gmail.com','$2b$10$CfsShaM/pj8gj/Dyg1GWHOm4V.leqY6mYPVNf/LSqA816RLuN0eA6','job_provider','2025-02-24 22:06:42'),
(15,'Ayesha Khan','ayesha.khan@gmail.com','$2b$10$4TbWhqUWUIKw067D6d2sVeupRyz9ms6X39BmfGDFca/WcxnPhJNE6','user','2025-02-25 10:15:30'),
(16,'Rahul Sharma','rahul.sharma@gmail.com','$2b$10$4TbWhqUWUIKw067D6d2sVeupRyz9ms6X39BmfGDFca/WcxnPhJNE6','job_provider','2025-02-25 11:22:10'),
(17,'Emily Johnson','emily.johnson@gmail.com','$2b$10$4TbWhqUWUIKw067D6d2sVeupRyz9ms6X39BmfGDFca/WcxnPhJNE6','user','2025-02-25 12:05:45'),
(18,'Omar Farooq','omar.farooq@gmail.com','$2b$10$4TbWhqUWUIKw067D6d2sVeupRyz9ms6X39BmfGDFca/WcxnPhJNE6','job_provider','2025-02-25 13:30:20'),
(19,'Sophia Lee','sophia.lee@gmail.com','$2b$10$4TbWhqUWUIKw067D6d2sVeupRyz9ms6X39BmfGDFca/WcxnPhJNE6','user','2025-02-25 14:45:00'),
(20,'Mohammad Yusuf','mohammad.yusuf@gmail.com','$2b$10$4TbWhqUWUIKw067D6d2sVeupRyz9ms6X39BmfGDFca/WcxnPhJNE6','job_provider','2025-02-25 15:10:15'),
(21,'Daniel Brown','daniel.brown@gmail.com','$2b$10$4TbWhqUWUIKw067D6d2sVeupRyz9ms6X39BmfGDFca/WcxnPhJNE6','user','2025-02-25 16:20:35'),
(22,'Fatima Noor','fatima.noor@gmail.com','$2b$10$4TbWhqUWUIKw067D6d2sVeupRyz9ms6X39BmfGDFca/WcxnPhJNE6','job_provider','2025-02-25 17:40:50'),
(23,'Alex Carter','alex.carter@gmail.com','$2b$10$4TbWhqUWUIKw067D6d2sVeupRyz9ms6X39BmfGDFca/WcxnPhJNE6','user','2025-02-25 18:55:25'),
(24,'Hassan Raza','hassan.raza@gmail.com','$2b$10$4TbWhqUWUIKw067D6d2sVeupRyz9ms6X39BmfGDFca/WcxnPhJNE6','job_provider','2025-02-25 19:15:10');


-- Jobs
CREATE TABLE `jobs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `jobRole` varchar(255) DEFAULT NULL,
  `description` text,
  `minSalary` int DEFAULT NULL,
  `maxSalary` int DEFAULT NULL,
  `jobType` varchar(255) DEFAULT NULL,
  `companyName` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `jobProviderID` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `jobProviderID` (`jobProviderID`),
  CONSTRAINT `jobs_ibfk_1` FOREIGN KEY (`jobProviderID`) REFERENCES `users` (`id`) ON DELETE CASCADE
) 

-- Insert
INSERT INTO jobs (id,title,jobRole,description,minSalary,maxSalary,jobType,companyName,city,country,jobProviderID,created_at)
VALUES
(41,'Software Engineer','Developer','Develop and maintain web applications.',60000,90000,'Full-time','Tech Solutions','New York','USA',2,'2025-03-04 21:55:32'),
(42,'Frontend Developer','Developer','Build UI components using React.js.',50000,80000,'Full-time','Web Innovators','San Francisco','USA',2,'2025-03-04 21:55:32'),
(43,'Backend Developer','Developer','Create APIs and manage databases.',55000,85000,'Full-time','Code Masters','Chicago','USA',4,'2025-03-04 21:55:32'),
(44,'Project Manager','Management','Lead software development teams.',70000,110000,'Full-time','Agile Corp','Austin','USA',4,'2025-03-04 21:55:32'),
(45,'Data Analyst','Analyst','Analyze and interpret data trends.',50000,75000,'Part-time','Data Insights','Toronto','Canada',24,'2025-03-04 21:55:32'),
(46,'Cybersecurity Specialist','Security','Ensure data security and prevent breaches.',65000,95000,'Full-time','SecureTech','London','UK',16,'2025-03-04 21:55:32'),
(47,'AI Engineer','Developer','Develop AI and ML models.',70000,120000,'Full-time','AI Future','Berlin','Germany',20,'2025-03-04 21:55:32'),
(48,'DevOps Engineer','IT','Manage cloud and CI/CD pipelines.',60000,95000,'Full-time','CloudOps','Sydney','Australia',20,'2025-03-04 21:55:32'),
(49,'Database Administrator','Database','Maintain and optimize databases.',55000,85000,'Full-time','DB Experts','Paris','France',22,'2025-03-04 21:55:32'),
(50,'Marketing Manager','Marketing','Develop and execute marketing strategies.',60000,95000,'Full-time','Ad World','Dubai','UAE',22,'2025-03-04 21:55:32'),
(51,'Graphic Designer','Designer','Create visual content and branding.',40000,70000,'Freelance','Creative Studios','Los Angeles','USA',2,'2025-03-04 21:55:32'),
(52,'Technical Writer','Content','Write technical documentation.',45000,75000,'Remote','DocuTech','Singapore','Singapore',4,'2025-03-04 21:55:32'),
(53,'IT Support Engineer','Support','Provide IT support and troubleshooting.',40000,65000,'Full-time','HelpDesk Co.','Madrid','Spain',16,'2025-03-04 21:55:32'),
(54,'UX/UI Designer','Designer','Design user-friendly interfaces.',50000,85000,'Full-time','Design Hub','Amsterdam','Netherlands',16,'2025-03-04 21:55:32'),
(55,'Sales Executive','Sales','Drive sales and customer engagement.',45000,80000,'Full-time','SalesX','Hong Kong','China',18,'2025-03-04 21:55:32'),
(56,'Cloud Architect','IT','Design cloud infrastructure.',80000,130000,'Full-time','CloudGenius','Tokyo','Japan',18,'2025-03-04 21:55:32'),
(57,'HR Manager','HR','Handle recruitment and HR policies.',60000,90000,'Full-time','HR Solutions','Dubai','UAE',20,'2025-03-04 21:55:32'),
(58,'Game Developer','Developer','Develop and test game applications.',50000,95000,'Full-time','GameTech','Seoul','South Korea',20,'2025-03-04 21:55:32'),
(59,'SEO Specialist','Marketing','Optimize websites for search engines.',45000,75000,'Remote','SEO Experts','Stockholm','Sweden',22,'2025-03-04 21:55:32'),
(60,'Network Engineer','Networking','Design and maintain network infrastructure.',55000,90000,'Full-time','NetSecure','Dublin','Ireland',24,'2025-03-04 21:55:32');


-- Applications
CREATE TABLE `applications` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `jobID` int DEFAULT NULL,
  `cv` varchar(255) DEFAULT NULL,
  `applied_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `jobID` (`jobID`),
  CONSTRAINT `applications_ibfk_1` FOREIGN KEY (`jobID`) REFERENCES `jobs` (`id`) ON DELETE CASCADE)


  INSERT INTO `mytable` (`id`,`userName`,`address`,`city`,`country`,`jobID`,`cv`,`applied_at`)
VALUES
(1,'Mahmood Hassan Rameem','House 03, Lane 21, Block A, Section 10, Mirpur, Dhaka','Dhaka','Bangladesh',42,'http://localhost:8000/cv-1741104115212-811132166.pdf','2025-03-04 22:01:55'),
(2,'Fahmida Yeasmin','Mirpur 14','Dhaka','Bangladesh',43,'http://localhost:8000/cv-1741104177538-294289321.pdf','2025-03-04 22:02:57'),
(3,'Ayesha Khan','Banani DOHS','Dhaka','Bangladesh',44,'http://localhost:8000/cv-1741104177538-294289321.pdf','2025-03-05 09:10:15'),
(4,'Rahul Sharma','Gulshan 2','Dhaka','Bangladesh',45,'http://localhost:8000/cv-1741104177538-294289321.pdf','2025-03-05 09:20:30'),
(5,'Emily Johnson','Sector 10, Uttara','Dhaka','Bangladesh',46,'http://localhost:8000/cv-1741104177538-294289321.pdf','2025-03-05 09:30:45'),
(6,'Omar Farooq','Dhanmondi 27','Dhaka','Bangladesh',47,'http://localhost:8000/cv-1741104177538-294289321.pdf','2025-03-05 09:45:00'),
(7,'Sophia Lee','Mohammadpur','Dhaka','Bangladesh',48,'http://localhost:8000/cv-1741104177538-294289321.pdf','2025-03-05 10:00:10'),
(8,'Mohammad Yusuf','Bashundhara R/A','Dhaka','Bangladesh',49,'http://localhost:8000/cv-1741104177538-294289321.pdf','2025-03-05 10:15:25'),
(9,'Daniel Brown','Lalmatia','Dhaka','Bangladesh',50,'http://localhost:8000/cv-1741104177538-294289321.pdf','2025-03-05 10:30:40'),
(10,'Fatima Noor','Shyamoli','Dhaka','Bangladesh',51,'http://localhost:8000/cv-1741104177538-294289321.pdf','2025-03-05 10:45:55'),
(11,'Alex Carter','Mirpur DOHS','Dhaka','Bangladesh',52,'http://localhost:8000/cv-1741104177538-294289321.pdf','2025-03-05 11:00:20'),
(12,'Hassan Raza','Niketon','Dhaka','Bangladesh',53,'http://localhost:8000/cv-1741104177538-294289321.pdf','2025-03-05 11:15:35'),
(13,'Nadia Islam','Baridhara','Dhaka','Bangladesh',54,'http://localhost:8000/cv-1741104177538-294289321.pdf','2025-03-05 11:30:50'),
(14,'Arif Hossain','Wari','Dhaka','Bangladesh',55,'http://localhost:8000/cv-1741104177538-294289321.pdf','2025-03-05 11:45:05'),
(15,'Samira Ahmed','Malibagh','Dhaka','Bangladesh',56,'http://localhost:8000/cv-1741104177538-294289321.pdf','2025-03-05 12:00:20'),
(16,'Tanvir Alam','Kakrail','Dhaka','Bangladesh',57,'http://localhost:8000/cv-1741105134567-654987321.pdf','2025-03-05 12:15:35');