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
    private username: string = '';
    private password: string = '';
    private firstName: string | null = null;
    private lastName: string | null = null;
    private email: string = '';
    private profilePhoto: string | null = null;
    private headerImage: string | null = null;
    private accountType: AccountType = AccountType.Personal;
    private maritalStatus: MaritalStatus = MaritalStatus.Single;
    private biography: string | null = null;
    private dateOfBirth: Date | null = null;
    private joined: Date = new Date();
    private location: Location | null = null;
}

