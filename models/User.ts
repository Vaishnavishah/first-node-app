import AccountType from "./AccountType";
import MaritalStatus from "./MaritalStatus";
import Location from "./Location";

/**
 * @typedef User Represents a user in our tuiter app
 * @property {string} username name of user
 * @property {string} password password for the account
 * @property {string} firstName first name of user
 * @property {string} lastName last name of user
 * @property {string} email email id of user
 * @property {string} profilePhoto profile picture of user
 * @property {string} headerImage header image for user home page
 * @property {string} biography bio of user
 * @property {Date}   dateOfBirth date of birh of user
 * @property {AccountType} accountType the type of account
 * @property {MaritalStatus} maritalStatus marital status of the user
 */
export default class User {
    username: string = '';
    password: string = '';
    firstName?: string | null = null;
    lastName?: string | null = null;
    email: string = '';
    profilePhoto?: string | null = null;
    headerImage?: string | null = null;
    accountType?: AccountType = AccountType.Personal;
    maritalStatus?: MaritalStatus = MaritalStatus.Single;
    biography?: string | null = null;
    dateOfBirth?: Date | null = null;
    joined?: Date = new Date();
    location?: Location | null = null;
}

