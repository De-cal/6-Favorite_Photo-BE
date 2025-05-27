export class User {
  /** ID */
  _id;

  /** Email */
  _email;

  /** Password */
  _password;

  /** Nickname */
  _nickname;

  /** Point Amount */
  _pointAmount;

  /** Create Count */
  _createCount;

  /** Creation Timestamp */
  _createdAt;

  constructor(param) {
    this._id = param.id;
    this._email = param.email;
    this._password = param.password;
    this._nickname = param.nickname;
    this._pointAmount = param.pointAmount ?? 0;
    this._createCount = param.createCount ?? 0;
    this._createdAt = param.createdAt;
  }

  getId() {
    return this._id;
  }

  getEmail() {
    return this._email;
  }

  getPassword() {
    return this._password;
  }

  getNickname() {
    return this._nickname;
  }

  getPointAmount() {
    return this._pointAmount;
  }

  getCreateCount() {
    return this._createCount;
  }

  getCreatedAt() {
    return this._createdAt;
  }
}
