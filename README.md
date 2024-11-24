# BulkMail Application

A MERN stack application designed to send bulk emails efficiently. The application enables users to upload email lists from Excel files and send custom messages to multiple recipients with just one click.

## Features
- **Upload Email List**: Supports `.xlsx` files for importing email addresses.
- **Custom Message**: Allows users to compose and send a personalized message.
- **Bulk Email Sending**: Sends messages to all the email addresses in the uploaded list.
- **Responsive Design**: Ensures a smooth user experience across all devices.
- **Secure Credentials**: Uses MongoDB for securely managing email credentials.

## Tech Stack
- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Library/Tools**: 
  - **Axios**: For making API requests.
  - **XLSX**: For reading Excel files.
  - **Nodemailer**: For sending emails.

## How to Run Locally
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/M-Muthu-Pandi/Bulkmail-MERN.git
   ```
2. **Install Dependencies**:
   Navigate to both the frontend and backend directories and run:
   ```bash
   npm install
   ```
3. **Start the Server**:
   ```bash
   cd backend
   npm start
   ```
4. **Start the Frontend**:
   ```bash
   cd frontend
   npm start
   ```
5. **Access the Application**:
   Open `http://localhost:3000` in your browser.

## Future Enhancements
- Add email scheduling functionality.
- Provide a progress bar for email sending.
- Enhance file type validations.

## Contributions
Contributions are welcome! Please feel free to raise issues or submit pull requests.

## Contact
Feel free to reach out via [LinkedIn](https://www.linkedin.com/in/muthupandim/) for collaborations or queries.
```