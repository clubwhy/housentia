/*M!999999\- enable the sandbox mode */ 
-- MariaDB dump 10.19-11.8.2-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: house_db
-- ------------------------------------------------------
-- Server version	11.8.2-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*M!100616 SET @OLD_NOTE_VERBOSITY=@@NOTE_VERBOSITY, NOTE_VERBOSITY=0 */;

--
-- Table structure for table `agents`
--

DROP TABLE IF EXISTS `agents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `agents` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `vendor_uid` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `email` varchar(150) DEFAULT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `active` tinyint(1) DEFAULT 1,
  `registered` datetime DEFAULT current_timestamp(),
  `updated` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `sns_url1` varchar(255) DEFAULT NULL,
  `sns_url2` varchar(255) DEFAULT NULL,
  `sns_url3` varchar(255) DEFAULT NULL,
  `website` varchar(255) DEFAULT NULL,
  `photo_url` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`uid`),
  KEY `vendor_uid` (`vendor_uid`),
  CONSTRAINT `agents_ibfk_1` FOREIGN KEY (`vendor_uid`) REFERENCES `vendors` (`uid`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `agents`
--

LOCK TABLES `agents` WRITE;
/*!40000 ALTER TABLE `agents` DISABLE KEYS */;
set autocommit=0;
INSERT INTO `agents` VALUES
(1,1,'Stephanie Stephenson','Sales Representative','stephanie.stephenson@sunrun.com','(909) 788-9107',1,'2025-07-08 10:10:40','2025-07-08 10:10:40',NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `agents` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Table structure for table `habi_chat_log`
--

DROP TABLE IF EXISTS `habi_chat_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `habi_chat_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `ip` varchar(45) DEFAULT NULL,
  `message` text NOT NULL,
  `role` enum('user','ai') NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `habi_chat_log`
--

LOCK TABLES `habi_chat_log` WRITE;
/*!40000 ALTER TABLE `habi_chat_log` DISABLE KEYS */;
set autocommit=0;
INSERT INTO `habi_chat_log` VALUES
(1,'kundergroundmusic@gmail.com','::1','hello','user','2025-07-11 19:05:28'),
(2,'kundergroundmusic@gmail.com','::1','Hello there! How can I help you today?','ai','2025-07-11 19:05:36'),
(3,'kundergroundmusic@gmail.com','::1','what is the calhfa','user','2025-07-11 22:19:19'),
(4,'kundergroundmusic@gmail.com','::1','Of course. Here is a detailed explanation of what CalHFA is.\n\n### What is CalHFA?\n\n**CalHFA** stands for the **California Housing Finance Agency**. It is a self-supporting state agency that makes it possible for low- and moderate-income Californians to afford a home.\n\nThink of CalHFA as a support system for first-time homebuyers. It doesn\'t lend money directly to you like a bank does. Instead, it partners with approved private lenders (like banks, credit unions, and mortgage companies) to offer special mortgage and assistance programs.\n\n---\n\n### Core Mission & Who They Help\n\n*   **Mission:** To help more Californians achieve the dream of homeownership by providing affordable and accessible financing options.\n*   **Primary Audience:** Low- to moderate-income individuals and families who are **first-time homebuyers**.\n    *   **Definition of a First-Time Homebuyer:** For CalHFA\'s purposes, this generally means someone who has not owned and occupied their own home in the last three years.\n\n---\n\n### How It Works (The Mechanism)\n\nThis is the most important part to understand:\n\n1.  **You Don\'t Apply to CalHFA Directly:** You work with a **CalHFA-approved lender**. This lender is trained on all of CalHFA\'s programs.\n2.  **The Lender Provides the Main Loan:** You get your primary mortgage (like an FHA, VA, or Conventional loan) from the approved lender.\n3.  **CalHFA Provides the \"Helper\" Loan:** CalHFA provides the down payment and/or closing cost assistance in the form of a smaller, \"junior\" loan that is layered on top of your main mortgage.\n4.  **Funding Source:** CalHFA is **not funded by taxpayer dollars**. It funds its programs by selling tax-exempt mortgage bonds on the private market.\n\n---\n\n### Key CalHFA Programs\n\nCalHFA offers several programs that can often be combined. Here are the most popular ones:\n\n#### 1. Down Payment Assistance Programs\n\nThese are \"junior\" loans used to cover the 3-5% down payment required by most mortgages.\n\n*   **MyHome Assistance Program:** This is their primary down payment assistance program. It gives you a loan of up to 3.5% of the home\'s purchase price. Repayment is deferred, meaning you don\'t make monthly payments on it. You typically repay the loan when you sell the home, refinance, or pay off your primary mortgage.\n*   **Forgivable Equity Builder Loan:** This is one of their most attractive programs. It provides a forgivable loan of up to **10% of the purchase price**. If you continuously live in the home as your primary residence for five years, the loan is completely forgiven and you owe nothing. This is a massive benefit for building immediate equity.\n\n#### 2. Closing Cost Assistance\n\n*   **CalHFA Zero Interest Program (ZIP):** This program offers a deferred-payment loan to help cover your closing costs. As the name implies, it has a 0% interest rate. Like the MyHome loan, you typically repay it when you sell or refinance the home.\n\n---\n\n### Who is Eligible?\n\nEligibility requirements are strict and must be met. The lender will verify everything.\n\n*   **Income Limits:** You must meet the income limits for your county and household size. These limits are updated regularly and can be found on the CalHFA website.\n*   **First-Time Homebuyer Status:** You must meet the \"first-time homebuyer\" definition (not owned a home in 3 years).\n*   **Credit Score:** You need to meet minimum credit score requirements (typically in the mid-to-high 600s, but this can vary by program and lender).\n*   **Homebuyer Education:** You are **required** to complete a homebuyer education course from an approved organization. This course teaches you about the responsibilities and financial aspects of owning a home.\n*   **Property Requirements:** The home must be in California, be your primary residence, and meet certain sales price limits for the county.\n\n---\n\n### How to Get Started with CalHFA\n\n1.  **Check the Income and Sales Price Limits:** Go to the CalHFA website to see if your household income and the price of the home you\'re considering are within the limits for your county.\n2.  **Find a CalHFA-Approved Lender:** This is the most critical step. Use the lender search tool on the CalHFA website to find a loan officer in your area.\n3.  **Contact the Lender:** The loan officer will assess your financial situation, determine which CalHFA programs you are eligible for, and guide you through the entire application process.\n\n### Summary\n\n**CalHFA is a California state agency that provides down payment and closing cost assistance to eligible first-time homebuyers through a network of private lenders. It makes homeownership more accessible for people who can afford the monthly mortgage payment but struggle to save for the initial down payment.**','ai','2025-07-11 22:19:46'),
(5,'kundergroundmusic@gmail.com','::1','what is va loan','user','2025-07-11 22:31:23'),
(6,'kundergroundmusic@gmail.com','::1','Of course! Here is a detailed explanation of what a VA loan is.\n\n### What is a VA Loan? In a Nutshell\n\nA **VA loan** is a mortgage loan program established and guaranteed by the **U.S. Department of Veterans Affairs (VA)**. Its primary purpose is to help eligible American veterans, active-duty service members, and certain surviving spouses purchase a home.\n\nThe most important thing to understand is that **the VA does not lend the money directly**. Instead, the VA *guarantees* a portion of the loan made by a private lender (like a bank, credit union, or mortgage company). This guarantee protects the lender from loss if the borrower defaults, making it a less risky loan for them to issue.\n\n---\n\n### Key Features and Major Benefits (Why it\'s so popular)\n\nThe VA loan is widely considered one of the best mortgage products available, thanks to these incredible benefits:\n\n**1. No Down Payment Required ($0 Down)**\nThis is the most famous benefit. For most qualified borrowers, a VA loan does not require any down payment. This removes the biggest financial hurdle for many aspiring homeowners.\n\n**2. No Private Mortgage Insurance (PMI)**\nConventional loans typically require you to pay PMI if your down payment is less than 20%. PMI is insurance that protects the lender, and it can add hundreds of dollars to your monthly payment. VA loans **do not have PMI**, saving borrowers a significant amount of money over the life of the loan.\n\n**3. Competitive Interest Rates**\nBecause the VA guarantees the loan, lenders face less risk. This reduced risk often translates into lower interest rates for VA borrowers compared to other loan types.\n\n**4. Limited Closing Costs**\nThe VA limits the closing costs that lenders can charge to veteran borrowers. Some costs, like attorney fees or underwriting fees, may be paid by the seller or the lender.\n\n**5. No Prepayment Penalty**\nYou can make extra payments or pay off your entire loan early without any financial penalty.\n\n**6. It\'s a Reusable, Lifetime Benefit**\nYou can use your VA loan benefit multiple times. Once you sell the home and pay off the loan, your full entitlement is typically restored and available for your next home purchase.\n\n**7. Assumable Mortgage**\nA VA loan can be \"assumed\" by another qualified buyer (veteran or non-veteran). If interest rates rise in the future, having a low-rate, assumable mortgage can be a huge selling point for your home.\n\n---\n\n### Who is Eligible for a VA Loan?\n\nEligibility is generally based on the length and character of your military service. While specific requirements can vary, the main eligible groups are:\n\n*   **Active-Duty Service Members:** Those who have served for at least 90 continuous days.\n*   **Veterans:** Those who meet specific service length requirements, which depend on when they served (e.g., 24 continuous months for the Post-Vietnam era, or 90/181 days during wartime).\n*   **National Guard and Reserve Members:** Typically require 6 years of honorable service, but the requirement is shorter if called to active duty.\n*   **Surviving Spouses:** The un-remarried spouse of a service member who died in the line of duty or from a service-related disability.\n\nThe official proof of eligibility is a **Certificate of Eligibility (COE)**. You can get this through your VA-approved lender, online through the VA\'s eBenefits portal, or by mail.\n\n---\n\n### Are There Any Downsides or Costs?\n\nWhile VA loans are excellent, there are a few things to be aware of:\n\n**1. The VA Funding Fee**\nThis is a one-time fee paid to the VA to help fund the program and reduce the cost to taxpayers.\n*   The fee is a percentage of the loan amount and varies based on your service type, your down payment amount, and whether it\'s your first time using the benefit.\n*   For first-time users with $0 down, the fee is typically 2.3% of the loan amount.\n*   **Crucially, this fee can be rolled into the total loan amount.**\n*   **Exemption:** Veterans receiving VA disability compensation are **exempt** from paying the funding fee.\n\n**2. Property Requirements (MPRs)**\nThe home you are buying must be appraised by a VA-certified appraiser and meet the VA\'s **Minimum Property Requirements (MPRs)**. This is to ensure the house is safe, structurally sound, and sanitary. This can make it difficult to purchase a major \"fixer-upper\" with a VA loan.\n\n**3. Primary Residence Only**\nYou can only use a VA loan to purchase your primary residence. It cannot be used for a vacation home or a purely investment property (though you can buy a multi-unit property, like a duplex, as long as you live in one of the units).\n\n---\n\n### Types of VA Loans\n\n*   **VA Purchase Loan:** The standard loan for buying a home.\n*   **VA Interest Rate Reduction Refinance Loan (IRRRL):** Also known as the \"Streamline Refinance,\" this allows you to easily refinance an existing VA loan to get a lower interest rate with minimal paperwork.\n*   **VA Cash-Out Refinance:** Allows you to refinance your existing mortgage and tap into your home\'s equity as cash. You can refinance a non-VA loan into a VA loan with this option.\n\n### Summary\n\nA **VA loan** is a powerful home financing tool and a hard-earned benefit for those who have served the country. By eliminating the need for a down payment and PMI, it makes homeownership accessible and affordable for millions of veterans and their families. If you think you might be eligible, it is one of the first and best options you should explore.','ai','2025-07-11 22:31:55'),
(7,'kundergroundmusic@gmail.com','::1','what ltv','user','2025-07-11 22:32:46'),
(8,'kundergroundmusic@gmail.com','::1','Of course. \"LTV\" is an acronym that has two very common, but completely different, meanings depending on the context.\n\nThe two main meanings are:\n1.  **Loan-to-Value** (in Finance and Real Estate)\n2.  **Lifetime Value** (in Business and Marketing)\n\nHere’s a breakdown of each.\n\n---\n\n### 1. LTV: Loan-to-Value Ratio\n\nThis is the most common meaning in personal finance, especially when discussing mortgages or auto loans.\n\n**What is it?**\nThe Loan-to-Value (LTV) ratio is a financial term used by lenders to express the ratio of a loan to the value of the asset being purchased (the collateral). In simple terms, it\'s the percentage of the property\'s value that you are borrowing.\n\n**How is it Calculated?**\nThe formula is straightforward:\n\n> **LTV = (Loan Amount / Appraised Value of the Asset) x 100**\n\n**Why is it Important?**\nLTV is a measure of risk for the lender.\n*   **A high LTV** means the borrower has less equity (less of their own money) in the asset. This is seen as higher risk for the lender.\n*   **A low LTV** means the borrower has a larger down payment and more equity, which is lower risk for the lender.\n\n**Example in Practice (Mortgage):**\nYou want to buy a house that is appraised at **$500,000**.\n*   You make a down payment of **$100,000**.\n*   Your loan amount is therefore **$400,000**.\n\nYour LTV would be:\n($400,000 / $500,000) x 100 = **80% LTV**\n\n**Key implications of LTV for a borrower:**\n*   **Loan Approval:** A very high LTV might result in a loan denial.\n*   **Interest Rates:** Lower LTVs often qualify for better interest rates.\n*   **Private Mortgage Insurance (PMI):** For conventional home loans, if your LTV is **above 80%** (meaning your down payment is less than 20%), you are typically required to pay PMI. This insurance protects the lender in case you default on the loan.\n\n---\n\n### 2. LTV: Lifetime Value (also CLV or CLTV)\n\nThis is a crucial metric in business, marketing, and sales. It\'s often called **Customer Lifetime Value (CLV)**.\n\n**What is it?**\nLifetime Value (LTV) is a prediction of the total net profit a business will make from a single customer over the entire duration of their relationship. It helps a company understand how much a customer is worth.\n\n**How is it Calculated?**\nThere are many ways to calculate it, from simple to complex. A basic formula is:\n\n> **LTV = (Average Purchase Value) x (Average Purchase Frequency) x (Average Customer Lifespan)**\n\n**Why is it Important?**\nLTV tells a company how much it can afford to spend to acquire a new customer. The most important comparison is between **LTV** and **Customer Acquisition Cost (CAC)**.\n*   **If LTV > CAC:** The business is profitable. For every dollar spent to get a customer, you get more than a dollar back over time. A healthy ratio is often cited as 3:1 or higher.\n*   **If LTV < CAC:** The business is losing money on each new customer. This is an unsustainable model.\n\n**Example in Practice (Subscription Service):**\nImagine a streaming service like Netflix.\n*   A customer pays **$20 per month** (Average Purchase Value).\n*   They are predicted to remain a customer for **3 years** (36 months) (Average Customer Lifespan).\n\nA simple LTV calculation would be:\n$20/month x 36 months = **$720 LTV**\n\nNow, if it costs the company **$150** in marketing and sales to get that customer (the CAC), the company knows it will make a significant profit ($720 - $150 = $570) from that customer over their lifetime. This insight guides marketing budgets, retention efforts, and pricing strategies.\n\n---\n\n### Summary Table\n\n| Feature | LTV (Loan-to-Value) | LTV (Lifetime Value) |\n| :--- | :--- | :--- |\n| **Context** | Finance, Mortgages, Lending | Business, Marketing, Sales |\n| **Purpose** | To measure a lender\'s risk | To predict a customer\'s total worth |\n| **Who Uses It** | Banks, mortgage brokers, lenders | Marketers, business owners, analysts |\n| **What\'s \"Good\"?** | A **low** LTV is better (less risk) | A **high** LTV is better (more profit) |\n\nWhen you encounter the term \"LTV,\" the surrounding context will almost always tell you which one is being discussed.','ai','2025-07-11 22:33:13'),
(9,'kundergroundmusic@gmail.com','::ffff:192.168.1.2','what is LE','user','2025-07-11 22:43:46'),
(10,'kundergroundmusic@gmail.com','::ffff:192.168.1.2','Of course! \"LE\" is a very common term with several different meanings depending on the context.\n\nHere are the most common uses of \"LE,\" starting with the most likely ones.\n\n### Most Common Meanings\n\n#### 1. As a Word in French\n**\"Le\"** is the French masculine singular definite article, meaning **\"the\"**. It\'s one of the most common words in the French language.\n*   **Example:** *le livre* (the book), *le garçon* (the boy).\n\n#### 2. Law Enforcement (LE)\nThis is a very common acronym, especially in the United States, referring to police officers, government agents, and other agencies involved in enforcing laws.\n*   **Example:** \"The FBI is working with local LE on the investigation.\"\n\n#### 3. Limited Edition (LE)\nThis acronym is used in marketing and sales for products that are produced in a small, limited quantity. This often makes them more valuable or desirable to collectors.\n*   **Example:** \"She bought the LE version of the sneakers, which came in a special color.\"\n\n---\n\n### In Technology\n\n#### 4. Bluetooth Low Energy (Bluetooth LE)\nThis is a power-efficient version of Bluetooth wireless technology. It\'s designed for devices that need to send small amounts of data over long periods without draining the battery, such as fitness trackers, smartwatches, and smart home sensors.\n*   **Example:** \"My fitness tracker uses Bluetooth LE to sync with my phone all day.\"\n\n#### 5. Less Than or Equal To (<=)\nIn mathematics and computer programming, \"LE\" can be a shorthand or a command for the \"less than or equal to\" operator (≤ or `<=`).\n*   **Example:** \"The program will run a check if the value is LE 100.\"\n\n#### 6. Let\'s Encrypt (LE)\nLet\'s Encrypt is a non-profit Certificate Authority that provides free SSL/TLS certificates, which enable encrypted HTTPS connections for websites. It has played a huge role in making the web more secure.\n*   **Example:** \"Our website is secured using a free certificate from LE.\"\n\n---\n\n### Other Specific Meanings\n\n#### 7. Lower Extremity (Medical)\nIn medicine, \"LE\" is an abbreviation for **Lower Extremity**, which refers to the leg (from the hip down to the toes).\n*   **Example:** \"The patient has swelling in the right LE.\"\n\n#### 8. Longitudinal Engine (Automotive)\nIn cars, \"LE\" can refer to a **Longitudinal Engine**, where the engine is mounted with its crankshaft oriented along the long axis of the vehicle (front to back).\n\n#### 9. Leicester Postcode Area (UK)\nIn the United Kingdom, \"LE\" is the postcode area for Leicester and the surrounding region.\n\nTo give you the most accurate answer, **could you provide the context** in which you saw \"LE\" used?','ai','2025-07-11 22:44:10');
/*!40000 ALTER TABLE `habi_chat_log` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Table structure for table `login_log`
--

DROP TABLE IF EXISTS `login_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `login_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(128) NOT NULL,
  `ip` varchar(45) DEFAULT NULL,
  `success` tinyint(1) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login_log`
--

LOCK TABLES `login_log` WRITE;
/*!40000 ALTER TABLE `login_log` DISABLE KEYS */;
set autocommit=0;
INSERT INTO `login_log` VALUES
(1,'kundergroundmusic@gmail.com','::1',0,'2025-07-11 17:40:11'),
(2,'kundergroundmusic@gmail.com','::1',0,'2025-07-11 17:40:55'),
(3,'kundergroundmusic@gmail.com','::1',0,'2025-07-11 17:41:18'),
(4,'kudergroundmusic@gmail.com','::1',0,'2025-07-11 17:48:49'),
(5,'kudergroundmusic@gmail.com','::1',0,'2025-07-11 17:48:58'),
(6,'kundergroundmusic@gmail.com','::1',0,'2025-07-11 17:49:08'),
(7,'test@test.com','::1',0,'2025-07-11 17:52:13'),
(8,'test@test.com','::1',0,'2025-07-11 17:56:43'),
(9,'test@test.com','::1',0,'2025-07-11 17:57:02'),
(10,'test@test.com','::1',0,'2025-07-11 17:57:11'),
(11,'test@test.com','::1',0,'2025-07-11 17:58:51'),
(12,'test@test.com','::1',0,'2025-07-11 18:00:24'),
(13,'test@test.com','::1',0,'2025-07-11 18:04:21'),
(14,'test@test.com','::1',0,'2025-07-11 18:07:12'),
(15,'test@test.com','::1',1,'2025-07-11 18:08:35'),
(16,'test@test.com','::1',1,'2025-07-11 18:11:18'),
(17,'test@test.com','::1',1,'2025-07-11 18:12:07'),
(18,'test@test.com','::1',1,'2025-07-11 18:13:59'),
(19,'test@test.com','::1',1,'2025-07-11 18:16:34'),
(20,'test@test.com','::1',2,'2025-07-11 18:16:41'),
(21,'kundergroundmusic@gmail.com','::1',1,'2025-07-11 18:27:49'),
(22,'kundergroundmusic@gmail.com','::1',1,'2025-07-11 19:21:55'),
(23,'kundergroundmusic@gmail.com','::ffff:192.168.1.2',1,'2025-07-11 22:38:40'),
(24,'kundergroundmusic@gmail.com','::ffff:192.168.1.2',2,'2025-07-11 22:45:42');
/*!40000 ALTER TABLE `login_log` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Table structure for table `online_inquiry`
--

DROP TABLE IF EXISTS `online_inquiry`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `online_inquiry` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(32) NOT NULL,
  `goal` varchar(32) DEFAULT NULL,
  `consultant` varchar(32) DEFAULT NULL,
  `method` varchar(32) DEFAULT NULL,
  `schedule_date` date DEFAULT NULL,
  `schedule_time` time DEFAULT NULL,
  `name` varchar(64) DEFAULT NULL,
  `zipcode` varchar(16) DEFAULT NULL,
  `email` varchar(128) DEFAULT NULL,
  `phone` varchar(32) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `online_inquiry_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `online_inquiry`
--

LOCK TABLES `online_inquiry` WRITE;
/*!40000 ALTER TABLE `online_inquiry` DISABLE KEYS */;
set autocommit=0;
INSERT INTO `online_inquiry` VALUES
(1,'mortgage','purchase','loan_officer','zoom','2025-07-14','15:08:00','Young Hwan Cho','91737','kundergroundmusic@gmail.com','2134484852','2025-07-11 13:09:07',NULL),
(2,'mortgage','purchase','loan_officer','zoom','2025-07-25','17:09:00','Young Hwan Cho','91737','kundergroundmusic@gmail.com','2134484852','2025-07-11 13:09:28',NULL),
(3,'mortgage','purchase','loan_officer','zoom','2025-07-11','13:13:00','Young Hwan Cho','91737','kundergroundmusic@gmail.com','2134484852','2025-07-11 13:10:58',NULL),
(4,'mortgage','purchase','loan_officer','zoom','2025-07-24','16:55:00','young hwan cho','91737','kundergroundmusic@gmail.com','2134484852','2025-07-11 13:52:51',NULL),
(5,'realtor','see_homes','real_estate_agent','zoom','2025-07-11','17:28:00','Young Hwan Cho','91737','kundergroundmusic@gmail.com',NULL,'2025-07-11 15:27:44',NULL),
(6,'solar','solar','solar_agent','zoom','2025-07-23','15:46:00','tommy test','91730','kundergroundm@gmail.com',NULL,'2025-07-11 22:47:27',NULL);
/*!40000 ALTER TABLE `online_inquiry` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Table structure for table `product_categories`
--

DROP TABLE IF EXISTS `product_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_categories` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` varchar(500) DEFAULT NULL,
  `sort_order` int(11) DEFAULT 0,
  `active` tinyint(1) DEFAULT 1,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_categories`
--

LOCK TABLES `product_categories` WRITE;
/*!40000 ALTER TABLE `product_categories` DISABLE KEYS */;
set autocommit=0;
/*!40000 ALTER TABLE `product_categories` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `vendor_uid` int(11) DEFAULT NULL,
  `type_uid` int(11) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `image_url` varchar(1000) DEFAULT NULL,
  `product_url` varchar(1000) DEFAULT NULL,
  `cost_price` decimal(10,2) DEFAULT NULL,
  `retail_price` decimal(10,2) DEFAULT NULL,
  `commission_pct` decimal(5,2) DEFAULT NULL,
  `stock_qty` int(11) DEFAULT NULL,
  `sku` varchar(100) DEFAULT NULL,
  `active` tinyint(1) DEFAULT 1,
  `sort_order` int(11) DEFAULT 0,
  `registered` datetime DEFAULT current_timestamp(),
  `updated` datetime DEFAULT NULL,
  PRIMARY KEY (`uid`),
  KEY `vendor_uid` (`vendor_uid`),
  KEY `type_uid` (`type_uid`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`vendor_uid`) REFERENCES `vendors` (`uid`),
  CONSTRAINT `products_ibfk_2` FOREIGN KEY (`type_uid`) REFERENCES `types` (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
set autocommit=0;
INSERT INTO `products` VALUES
(1,1,1,'Compact Cordless Drill Set','Lightweight drill perfect for beginners with rechargeable battery and bits.','https://yourcdn.com/images/drill.jpg','https://yourshop.com/products/cordless-drill',49.99,59.99,NULL,NULL,NULL,1,0,'2025-07-08 11:57:38',NULL),
(2,1,2,'Digital Laser Distance Measure','Quickly measure rooms or outdoor spaces with this compact laser tool.','https://yourcdn.com/images/laser-measure.jpg','https://yourshop.com/products/laser-measure',39.99,49.99,NULL,NULL,NULL,1,0,'2025-07-08 11:57:38',NULL),
(3,2,1,'DIY Hand Tool Kit (39 Pieces)','Essential screwdrivers, pliers, hammer and more—all in a compact case.','https://yourcdn.com/images/tool-kit.jpg','https://yourshop.com/products/tool-kit',34.95,44.95,NULL,NULL,NULL,1,0,'2025-07-08 11:57:38',NULL),
(4,2,3,'Indoor Plant Shelf Set','Modern 3-tier shelf for displaying succulents or herbs.','https://yourcdn.com/images/plant-shelf.jpg','https://yourshop.com/products/plant-shelf',59.00,69.00,NULL,NULL,NULL,1,0,'2025-07-08 11:57:38',NULL),
(5,3,4,'Solar-Powered Pathway Lights (4-Pack)','Eco-friendly and stylish outdoor lighting with dusk-to-dawn sensors.','https://yourcdn.com/images/solar-lights.jpg','https://yourshop.com/products/solar-path-lights',29.99,39.99,NULL,NULL,NULL,1,0,'2025-07-08 11:57:38',NULL),
(6,1,2,'Magnetic Stud Finder','Easily locate wall studs with this pocket-size tool. No batteries needed.','https://yourcdn.com/images/stud-finder.jpg','https://yourshop.com/products/stud-finder',12.99,17.99,NULL,NULL,NULL,1,0,'2025-07-08 11:57:38',NULL),
(7,2,3,'Ergonomic Garden Tool Set','Includes gloves, trowel, rake, and weeder. Great for beginners.','https://yourcdn.com/images/garden-set.jpg','https://yourshop.com/products/garden-set',24.95,34.95,NULL,NULL,NULL,1,0,'2025-07-08 11:57:38',NULL),
(8,3,5,'Mini LED Work Light','Rechargeable, magnetic base, perfect for night repairs or camping.','https://yourcdn.com/images/work-light.jpg','https://yourshop.com/products/led-work-light',18.00,25.00,NULL,NULL,NULL,1,0,'2025-07-08 11:57:38',NULL),
(9,2,1,'Adjustable Wrench & Pliers Set','Strong steel tools with rubber grip. Ideal for plumbing & assembly.','https://yourcdn.com/images/wrench-pliers.jpg','https://yourshop.com/products/wrench-pliers',21.50,29.00,NULL,NULL,NULL,1,0,'2025-07-08 11:57:38',NULL),
(10,1,4,'DIY Picture Hanging Kit','Includes hooks, wire, leveler, and nails for gallery-style walls.','https://yourcdn.com/images/hanging-kit.jpg','https://yourshop.com/products/hanging-kit',11.95,16.95,NULL,NULL,NULL,1,0,'2025-07-08 11:57:38',NULL),
(11,1,6,'Mini Electric Screwdriver Kit','USB-rechargeable screwdriver for electronics and light assembly.','https://yourcdn.com/images/electric-screwdriver.jpg','https://yourshop.com/products/electric-screwdriver',22.00,29.99,15.00,50,'DIY001',1,1,'2025-07-08 15:00:59',NULL),
(12,2,6,'Wall Repair Patch Kit','Includes patches, putty, and scraper for fixing small wall holes.','https://yourcdn.com/images/wall-patch-kit.jpg','https://yourshop.com/products/wall-patch-kit',12.50,18.95,20.00,100,'DIY002',1,2,'2025-07-08 15:00:59',NULL),
(13,3,6,'Basic Woodworking Starter Kit','Includes wood glue, clamps, and sanding block for hobby projects.','https://yourcdn.com/images/woodworking-kit.jpg','https://yourshop.com/products/woodworking-kit',18.00,24.95,18.00,30,'DIY003',1,3,'2025-07-08 15:00:59',NULL),
(14,2,7,'Herb Garden Starter Kit','Grow basil, mint, and parsley indoors with easy-to-use planter.','https://yourcdn.com/images/herb-kit.jpg','https://yourshop.com/products/herb-kit',14.00,19.95,15.00,40,'GARD001',1,1,'2025-07-08 15:00:59',NULL),
(15,1,7,'Self-Watering Plant Pots (2-Pack)','Great for busy plant lovers. Includes drainage system.','https://yourcdn.com/images/self-watering-pots.jpg','https://yourshop.com/products/self-watering-pots',11.50,16.50,20.00,60,'GARD002',1,2,'2025-07-08 15:00:59',NULL),
(16,3,7,'Garden Kneeling Pad & Gloves Set','Comfortable foam pad plus waterproof gloves for weeding.','https://yourcdn.com/images/kneeling-pad-gloves.jpg','https://yourshop.com/products/kneeling-pad-gloves',10.00,15.00,25.00,75,'GARD003',1,3,'2025-07-08 15:00:59',NULL),
(17,1,8,'Home Scented Candle Set','Aromatic soy candles with calming lavender and vanilla scents.','https://yourcdn.com/images/scented-candles.jpg','https://yourshop.com/products/scented-candles',9.50,14.99,20.00,80,'GIFT001',1,1,'2025-07-08 15:02:08',NULL),
(18,2,8,'DIY Terrarium Kit','Includes glass container, moss, stones, and mini succulents.','https://yourcdn.com/images/terrarium-kit.jpg','https://yourshop.com/products/terrarium-kit',15.00,22.95,25.00,40,'GIFT002',1,2,'2025-07-08 15:02:08',NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Table structure for table `types`
--

DROP TABLE IF EXISTS `types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `types` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(100) NOT NULL,
  `code` varchar(100) NOT NULL,
  `label` varchar(255) NOT NULL,
  `active` tinyint(1) DEFAULT 1,
  `sort_order` int(11) DEFAULT 0,
  `registered` datetime DEFAULT current_timestamp(),
  `updated` datetime DEFAULT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `types`
--

LOCK TABLES `types` WRITE;
/*!40000 ALTER TABLE `types` DISABLE KEYS */;
set autocommit=0;
INSERT INTO `types` VALUES
(1,'vendor','solar','Solar Installer',1,1,'2025-07-08 09:59:11',NULL),
(2,'product_type','dropship','Drop-Shipping Product',1,1,'2025-07-08 11:30:43',NULL),
(3,'product_type','affiliate','Affiliate Product',1,2,'2025-07-08 11:30:43',NULL),
(4,'product','trending','Trending Products',1,1,'2025-07-08 11:39:59',NULL),
(5,'product','interior','Interior Accessories',1,2,'2025-07-08 11:39:59',NULL),
(6,'product','diy_kits','DIY Kits & Tools',1,3,'2025-07-08 11:39:59',NULL),
(7,'product','gardening','Gardening Essentials',1,4,'2025-07-08 11:39:59',NULL),
(8,'product','gift','Gift Ideas',1,5,'2025-07-08 11:39:59',NULL),
(9,'inquiry_type','mortgage','loan officer',1,1,'2025-07-11 12:40:29',NULL),
(10,'inquiry_type','realtor','real estate agent',1,2,'2025-07-11 12:40:29',NULL),
(11,'inquiry_type','solar','solar agent',1,3,'2025-07-11 12:40:29',NULL),
(12,'goal','purchase','Home Purchase',1,1,'2025-07-11 12:42:44',NULL),
(13,'goal','refinance','Refinance',1,2,'2025-07-11 12:42:44',NULL),
(14,'goal','cashout','Cash-Out Refinance',1,3,'2025-07-11 12:42:44',NULL),
(15,'consultant','loan_officer','Loan Officer',1,1,'2025-07-11 12:42:56',NULL),
(16,'consultant','real_estate_agent','Real Estate Agent',1,2,'2025-07-11 12:42:56',NULL),
(17,'method','zoom','Online Zoom Meeting',1,1,'2025-07-11 12:42:59',NULL),
(18,'method','phone','Phone Call',1,2,'2025-07-11 12:42:59',NULL),
(19,'method','email','Email',1,3,'2025-07-11 12:42:59',NULL),
(20,'method','text','Text Message',1,4,'2025-07-11 12:42:59',NULL),
(21,'user_type','user','일반회원',1,1,'2025-07-11 17:17:30',NULL),
(22,'user_type','admin','관리자',1,2,'2025-07-11 17:17:30',NULL),
(23,'user_type','admin','관리자',1,2,'2025-07-11 17:17:30',NULL);
/*!40000 ALTER TABLE `types` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(64) DEFAULT NULL,
  `email` varchar(128) NOT NULL,
  `password` varchar(255) NOT NULL,
  `type` enum('user','admin','agent') NOT NULL DEFAULT 'user',
  `phone` varchar(32) DEFAULT NULL,
  `zipcode` varchar(16) DEFAULT NULL,
  `address1` varchar(255) DEFAULT NULL,
  `address2` varchar(255) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `state` varchar(50) DEFAULT NULL,
  `register_ip` varchar(45) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
set autocommit=0;
INSERT INTO `user` VALUES
(1,'Tommy test','kundergroundmusic@gmail.com','$2b$10$ILlzHe2XCAqnWCH7bO2ypu4U3TJrg7mByN9rEbFqUwY3B/EpruG4q','user','2131115555','91111','aaa bbb ave','123','LA','California','::1','2025-07-11 17:23:13',NULL),
(2,NULL,'kudergroundmusic@gmail.com','$2b$10$bTgaACivhXU/pfWGm/j7pewos7FQ5B7PidlEJN7Zt/RZKCdahold6','user',NULL,NULL,NULL,NULL,NULL,NULL,'::1','2025-07-11 17:46:07',NULL),
(3,NULL,'test@test.com','$2b$10$vVeBC8o9RE35jkQtml4R4uTnYTwX.wVDXrPS2/gJ3/4s6JxkYDrJa','user',NULL,NULL,NULL,NULL,NULL,NULL,'::1','2025-07-11 17:52:03',NULL),
(4,NULL,'t@t.com','$2b$10$mmUXMscpbAEC2uC53rGAve06ZWfQuHYfl3i/2yUtZWwJCsGheXZPi','user',NULL,NULL,NULL,NULL,NULL,NULL,'::1','2025-07-11 18:20:36',NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Table structure for table `vendors`
--

DROP TABLE IF EXISTS `vendors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `vendors` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `company` varchar(255) DEFAULT NULL,
  `website` varchar(500) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `active` tinyint(1) DEFAULT 1,
  `registered` datetime DEFAULT current_timestamp(),
  `updated` datetime DEFAULT NULL,
  `address1` varchar(255) DEFAULT NULL,
  `address2` varchar(255) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `state` varchar(50) DEFAULT NULL,
  `zipcode` varchar(20) DEFAULT NULL,
  `lat` decimal(10,6) DEFAULT NULL,
  `lng` decimal(10,6) DEFAULT NULL,
  `logo_url` varchar(1000) DEFAULT NULL,
  `thumbnail_url` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendors`
--

LOCK TABLES `vendors` WRITE;
/*!40000 ALTER TABLE `vendors` DISABLE KEYS */;
set autocommit=0;
INSERT INTO `vendors` VALUES
(1,'Sunrun','https://sunrun.com','customerservice@sunrun.com','1-855-478-6786',1,1,'2025-07-08 10:01:02',NULL,'225 Bush St','Suite 1400','San Francisco','CA','94104',37.790841,-122.401143,NULL,NULL),
(2,'Tesla Solar','https://tesla.com/energy','energycustomersupport@tesla.com','1-877-798-3752',1,1,'2025-07-08 10:01:02',NULL,'3500 Deer Creek Road',NULL,'Palo Alto','CA','94304',37.394694,-122.150308,NULL,NULL),
(3,'ADT Solar','https://adtsolar.com','info@adtsolar.com','1-833-409-1007',1,1,'2025-07-08 10:01:02',NULL,'12812 Willow Centre Dr','Ste A','Houston','TX','77066',29.970518,-95.498170,NULL,NULL),
(4,'SunPower','https://us.sunpower.com','customercare@sunpower.com','1-800-786-7693',1,1,'2025-07-08 10:01:02',NULL,'51 Rio Robles',NULL,'San Jose','CA','95134',37.397786,-121.922819,NULL,NULL),
(5,'Momentum Solar','https://momentumsolar.com','info@momentumsolar.com','1-888-666-3588',1,1,'2025-07-08 10:01:02',NULL,'3096 Hamilton Blvd',NULL,'South Plainfield','NJ','07080',40.557759,-74.422230,NULL,NULL);
/*!40000 ALTER TABLE `vendors` ENABLE KEYS */;
UNLOCK TABLES;
commit;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*M!100616 SET NOTE_VERBOSITY=@OLD_NOTE_VERBOSITY */;

-- Dump completed on 2025-07-12 14:14:07
