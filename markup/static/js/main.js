'use strict';

const contact = require('components/contacts/contacts');
const header = require('components/header/header');

$( document ).ready(function() {
  contact.init();
  header.init();
});
