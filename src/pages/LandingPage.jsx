// import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, User, FileText, Lock, Award, Clock } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-blue-600">MedVault</span>
              </div>
            </div>
            <div className="flex items-center">
              <div className="hidden md:ml-6 md:flex md:space-x-8">
                <a href="#features" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600">
                  Features
                </a>
                <a href="#how-it-works" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600">
                  How It Works
                </a>
                <a href="#security" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600">
                  Security
                </a>
              </div>
              <div className="flex items-center ml-6">
                <Link to="/login" className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                  Log in
                </Link>
                <Link to="/register" className="ml-3 px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="md:flex md:items-center md:space-x-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Your Medical Records</span>
                <span className="block text-blue-600">Secure. Portable. Yours.</span>
              </h1>
              <p className="mt-6 text-xl text-gray-500">
                MedVault gives you control over your medical records using blockchain technology.
                Securely share your records with healthcare providers anywhere, anytime.
              </p>
              <div className="mt-10 flex space-x-4">
                <Link to="/register" className="px-8 py-3 text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                  Get Started
                </Link>
                <a href="#learn-more" className="px-8 py-3 text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200">
                  Learn More
                </a>
              </div>
            </div>
            <div className="mt-12 md:mt-0 md:w-1/2">
              <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                <div className="bg-gray-200 h-64 flex items-center justify-center">
                  {/* Replace with actual hero image */}
                  <div className="text-gray-500">Medical Records Dashboard Preview</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              All Your Medical Records in One Place
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Access your complete medical history with confidence and security.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="bg-blue-50 rounded-lg p-8 text-center">
                <div className="flex justify-center">
                  <Shield className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="mt-6 text-xl font-medium text-gray-900">Blockchain Security</h3>
                <p className="mt-2 text-gray-500">
                  Your records are secured and verified using advanced blockchain technology.
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg p-8 text-center">
                <div className="flex justify-center">
                  <User className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="mt-6 text-xl font-medium text-gray-900">Patient Control</h3>
                <p className="mt-2 text-gray-500">
                  You decide who sees your records and for how long with granular access controls.
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg p-8 text-center">
                <div className="flex justify-center">
                  <FileText className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="mt-6 text-xl font-medium text-gray-900">Complete History</h3>
                <p className="mt-2 text-gray-500">
                  Access your entire medical history in one place, from any device, anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div id="how-it-works" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              How MedVault Works
            </h2>
          </div>

          <div className="mt-16">
            <div className="relative">
              {/* Timeline connecting line */}
              <div className="hidden md:block absolute top-0 left-1/2 w-0.5 h-full bg-blue-200 -ml-px"></div>
              
              {/* Steps */}
              <div className="relative md:grid md:grid-cols-2 md:gap-8">
                {/* Step 1 */}
                <div className="md:mb-0 mb-10 md:flex md:justify-end">
                  <div className="md:pr-8 md:text-right">
                    <div className="flex md:justify-end">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white">
                        1
                      </div>
                    </div>
                    <h3 className="mt-4 text-xl font-medium text-gray-900">Create Your Account</h3>
                    <p className="mt-2 text-gray-500">
                      Sign up for MedVault and create your secure personal profile. Setup takes less than 5 minutes.
                    </p>
                  </div>
                </div>

                {/* Empty space for step 1 on the right */}
                <div className="hidden md:block"></div>

                {/* Empty space for step 2 on the left */}
                <div className="hidden md:block"></div>

                {/* Step 2 */}
                <div className="md:mt-16 md:mb-0 mb-10 relative">
                  <div className="md:pl-8">
                    <div className="flex">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white">
                        2
                      </div>
                    </div>
                    <h3 className="mt-4 text-xl font-medium text-gray-900">Import Your Records</h3>
                    <p className="mt-2 text-gray-500">
                      Upload existing medical records or connect with healthcare providers to import your data.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="md:mt-16 md:mb-0 mb-10 md:flex md:justify-end">
                  <div className="md:pr-8 md:text-right">
                    <div className="flex md:justify-end">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white">
                        3
                      </div>
                    </div>
                    <h3 className="mt-4 text-xl font-medium text-gray-900">Secure Your Data</h3>
                    <p className="mt-2 text-gray-500">
                      Your records are encrypted and securely stored with blockchain verification for authenticity.
                    </p>
                  </div>
                </div>

                {/* Empty space for step 3 on the right */}
                <div className="hidden md:block"></div>

                {/* Empty space for step 4 on the left */}
                <div className="hidden md:block"></div>

                {/* Step 4 */}
                <div className="md:mt-16 relative">
                  <div className="md:pl-8">
                    <div className="flex">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white">
                        4
                      </div>
                    </div>
                    <h3 className="mt-4 text-xl font-medium text-gray-900">Share With Providers</h3>
                    <p className="mt-2 text-gray-500">
                      Generate secure access codes or QR codes to share your records with healthcare providers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Security Section */}
      <div id="security" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                Bank-Level Security with Blockchain Verification
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Your medical data is precious. We protect it with the most advanced security measures available.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Lock className="h-6 w-6 text-green-500" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">End-to-End Encryption</h3>
                    <p className="mt-2 text-gray-500">
                      Your data is encrypted at all times, both in transit and at rest.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Award className="h-6 w-6 text-green-500" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Immutable Records</h3>
                    <p className="mt-2 text-gray-500">
                      Blockchain verification ensures your records cannot be altered or tampered with.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Clock className="h-6 w-6 text-green-500" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Time-Limited Access</h3>
                    <p className="mt-2 text-gray-500">
                      Healthcare providers only get access for the time period you specify.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-10 lg:mt-0">
              <div className="bg-blue-50 rounded-lg p-8 h-full flex items-center justify-center">
                {/* Replace with actual security illustration/image */}
                <div className="text-center">
                  <Shield className="h-24 w-24 text-blue-600 mx-auto" />
                  <p className="mt-4 text-gray-700 font-medium">
                    Your data is protected by advanced blockchain security
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to take control of your medical records?</span>
            <span className="block text-blue-200">Start your health journey today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link to="/register" className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50">
                Get Started
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a href="#learn-more" className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Product</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Features</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Security</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Privacy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Help Center</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Contact Us</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-300 hover:text-white">About</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Partners</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              {/* Social links */}
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Twitter</span>
                {/* Twitter icon */}
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Facebook</span>
                {/* Facebook icon */}
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">LinkedIn</span>
                {/* LinkedIn icon */}
              </a>
            </div>
            <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
              &copy; 2025 MedVault. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;