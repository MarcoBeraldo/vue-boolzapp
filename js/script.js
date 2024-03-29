const app = new Vue({
  el: "#root",
  data: {
    search: "",
    newMessage: "",
    currentContact: 0,
    user: {
      name: "Marca",
      avatar: "_io",
      visible: true,
    },
    contacts: [
      {
        name: "Michele",
        avatar: "_1",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "Hai portato a spasso il cane?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            text: "Ricordati di dargli da mangiare",
            status: "sent",
          },
          {
            date: "10/01/2020 16:15:22",
            text: "Tutto fatto!",
            status: "received",
          },
        ],
      },
      {
        name: "Fabio",
        avatar: "_2",
        visible: true,
        messages: [
          {
            date: "20/03/2020 16:30:00",
            text: "Ciao come stai?",
            status: "sent",
          },
          {
            date: "20/03/2020 16:30:55",
            text: "Bene grazie! Stasera ci vediamo?",
            status: "received",
          },
          {
            date: "20/03/2020 16:35:00",
            text: "Mi piacerebbe ma devo andare a fare la spesa.",
            status: "received",
          },
        ],
      },
      {
        name: "Samuele",
        avatar: "_3",
        visible: true,
        messages: [
          {
            date: "28/03/2020 10:10:40",
            text: "La Marianna va in campagna",
            status: "received",
          },
          {
            date: "28/03/2020 10:20:10",
            text: "Sicuro di non aver sbagliato chat?",
            status: "sent",
          },
          {
            date: "28/03/2020 16:15:22",
            text: "Ah scusa!",
            status: "received",
          },
        ],
      },
      {
        name: "Luiso",
        avatar: "_4",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "Lo sai che ha aperto una nuova pizzeria?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            text: "Si, ma preferirei andare al cinema",
            status: "received",
          },
        ],
      },
    ],
  },
  computed: {
    filteredContacts() {
      return this.contacts.map((contact) => {
        contact.visible = contact.name.toLowerCase().includes(this.search.toLowerCase());
        return contact;
      });
    },
  },
  methods: {
    lastMessage(index) {
      const contactMessages = this.filteredContacts[index].messages;
      return contactMessages.length ? contactMessages[contactMessages.length - 1].text : "";
    },

    showChat(index) {
      this.currentContact = index;
    },

    getDate() {
      return new Date().toLocaleString("fr-BE");
    },

    getAnswer(index) {
      this.contacts[index].messages.push({
        date: this.getDate(),
        text: "ok",
        status: "received",
      });
    },

    addMessage(newMessage, index) {
      if (!this.newMessage) return;
      this.contacts[index].messages.push({
        date: this.getDate(),
        text: this.newMessage,
        status: "sent",
      });
      this.newMessage = "";

      setTimeout(() => {
        this.getAnswer(index);
      }, 1000);
    },

    deleteMessage(index, currentContact) {
      const contactMessages = this.filteredContacts[currentContact].messages;

      contactMessages.splice(index, 1);
    },
  },
});
