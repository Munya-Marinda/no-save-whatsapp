import Realm from "realm";

class ManageContacts {
  constructor() {
    this.realm = new Realm({ schema: [ContactSchema] });
  }

  getContacts() {
    try {
      const contacts = this.realm.objects("Contact");
      return { result: true, msg: "", data: contacts };
    } catch (error) {
      return { result: false, msg: error.message, data: [] };
    }
  }

  saveContact(name, number, messages = [], metaData = {}) {
    try {
      this.realm.write(() => {
        const contact = this.realm.create("Contact", {
          name,
          number,
          messages,
          metaData,
        });
      });
      return { result: true, msg: "Contact saved successfully" };
    } catch (error) {
      return { result: false, msg: error.message };
    }
  }

  saveMessage(contactId, message) {
    try {
      this.realm.write(() => {
        const contact = this.realm.objectForPrimaryKey("Contact", contactId);
        if (contact) {
          contact.messages.push(message);
        }
      });
      return { result: true, msg: "Message saved successfully" };
    } catch (error) {
      return { result: false, msg: error.message };
    }
  }

  deleteContact(contactId) {
    try {
      this.realm.write(() => {
        const contact = this.realm.objectForPrimaryKey("Contact", contactId);
        if (contact) {
          this.realm.delete(contact);
        }
      });
      return { result: true, msg: "Contact deleted successfully" };
    } catch (error) {
      return { result: false, msg: error.message };
    }
  }

  searchContacts(query) {
    try {
      const contacts = this.realm
        .objects("Contact")
        .filtered(
          `name CONTAINS[c] "${query}" OR number CONTAINS[c] "${query}"`
        );
      return { result: true, msg: "", data: contacts };
    } catch (error) {
      return { result: false, msg: error.message, data: [] };
    }
  }

  searchMessages(query) {
    try {
      const contacts = this.realm.objects("Contact");
      const filteredContacts = contacts.filtered(
        `ANY messages.datetimestamp CONTAINS[c] "${query}" OR ANY messages.metadata CONTAINS[c] "${query}"`
      );
      return { result: true, msg: "", data: filteredContacts };
    } catch (error) {
      return { result: false, msg: error.message, data: [] };
    }
  }

  filterContactsByName(name) {
    try {
      const contacts = this.realm
        .objects("Contact")
        .filtered(`name CONTAINS[c] "${name}"`);
      return { result: true, msg: "", data: contacts };
    } catch (error) {
      return { result: false, msg: error.message, data: [] };
    }
  }

  filterContactsByNumber(number) {
    try {
      const contacts = this.realm
        .objects("Contact")
        .filtered(`number CONTAINS[c] "${number}"`);
      return { result: true, msg: "", data: contacts };
    } catch (error) {
      return { result: false, msg: error.message, data: [] };
    }
  }
}

// Define the Contact schema
const ContactSchema = {
  name: "Contact",
  primaryKey: "id",
  properties: {
    id: { type: "int", indexed: true },
    name: "string",
    number: "string",
    messages: { type: "list", objectType: "Message" },
    metaData: "string",
  },
};

// Define the Message schema
const MessageSchema = {
  name: "Message",
  properties: {
    tonumber: "string",
    datetimestamp: "date",
    metadata: "string",
  },
};

export default ManageContacts;
