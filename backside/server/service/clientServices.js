var Client = require("../model/client.js");

module.exports = new (class ClientService {
  signup(data) {
    return Client.create(data);
  }
  getClientById(id) {
    return Client.findOne({ _id: id });
  }
  getClientByEmail(email) {
    return Client.findOne({ email: email });
  }
  getAllClient() {
    return Client.find();
  }
  delete(id) {
    return Client.findOneAndDelete({ _id: id });
  }

  updatePassword(_id, newpassword) {
    return Client.findOneAndUpdate({ _id: _id }, {password : newpassword});
  }
})();
