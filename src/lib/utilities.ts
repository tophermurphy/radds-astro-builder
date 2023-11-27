export function generateUUID() {
    return 'xxxxxx'.replace(/x/g, function() {
      return Math.floor(Math.random() * 16).toString(16);
    });
  }
  