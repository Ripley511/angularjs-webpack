export class ApiService {
  constructor($http) {
    this.$http = $http;
    this.baseUrl = '/api';
  }

  /**
   * Returns all items on the server
   * @param {String} path The relative path
   * @returns {Promise<Array>} Todos list
   */
  get(path) {
    return this.$http.get(`${this.baseUrl}/${path}`);
  }

  /**
   * Updates a todo and returns its updated value from the server
   * @param {String} path The relative path
   * @param {Object} data Data to update
   * @returns {Promise<Object>} Updated todo
   */
  update(path, data) {
    return this.$http.put(`${this.baseUrl}/${path}`, data);
  }

  /**
   * Creates an item and returns its value from the server
   * @param {String} path The relative path
   * @param {Object} data The model to create
   * @returns {Promise<Object>} Created model from the server
   */
  create(path, data) {
    return this.$http.post(`${this.baseUrl}/${path}`, data);
  }

  /**
   * Finds a single item from the server
   * @param {String} path The relative path
   * @returns {Promise<Object> Data
   */
  find(path) {
    return this.$http.get(`${this.baseUrl}/${path}`);
  }

  /**
   * Removes an item from the server
   * @param {String} path The relative path
   * @returns {Promise<>} Empty response
   */
  remove(path) {
    return this.$http.delete(`${this.baseUrl}/${path}`);
  }
}