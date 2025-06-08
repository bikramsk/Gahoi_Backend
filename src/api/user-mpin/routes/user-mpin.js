'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/check-user-mpin/:mobileNumber',
      handler: 'user-mpin.checkUserAndMPIN',
      config: {
        auth: false
      }
    },
    {
      method: 'POST',
      path: '/verify-mpin',
      handler: 'user-mpin.verifyMPIN',
      config: {
        auth: false
      }
    },
    {
      method: 'POST',
      path: '/send-whatsapp-otp',
      handler: 'user-mpin.sendWhatsAppOTP',
      config: {
        auth: false
      }
    },
    {
      method: 'POST',
      path: '/verify-otp',
      handler: 'user-mpin.verifyOTP',
      config: {
        auth: false
      }
    },
    {
      method: 'POST',
      path: '/create-mpin',
      handler: 'user-mpin.setMPIN',
      config: {
        auth: {
          scope: ['*']
        }
      }
    }
  ]
}; 