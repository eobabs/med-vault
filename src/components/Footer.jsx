import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">MedVault</h3>
            <p className="text-gray-300 text-sm">
              Blockchain-powered electronic medical records for patient control and security.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Features</h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>Secure Records</li>
              <li>Patient Control</li>
              <li>Easy Sharing</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>support@MedVault.com</li>
              <li>+234 (809) 123-4567</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-sm text-gray-400 text-center">
          &copy; 2025 MedVault. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;