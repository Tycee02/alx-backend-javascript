/**
 * Contains the miscellaneous route handlers.
 * @author Aminat Wakil <https://github.com/Tycee02>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
