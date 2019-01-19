'use strict';

const contact = require('components/contacts/contacts');
const header = require('components/header/header');
const portfolio = require('components/works/works');

$( document ).ready(function() {
  contact.init();
  header.init();
  portfolio.init();
});
