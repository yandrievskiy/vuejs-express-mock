const PASSWORD_RULES_REGEX = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[_!@+#$%^&*])(?=.{8,})');

const mapDataToResponse = (data) => {
  const response = {
    data: {},
    meta: {},
    authors: {},
  };

  response.data = data.data;

  for (const key in data) {
    if (key !== 'data') {
      response.meta[key] = data[key];
    }
  }

  return response;
}

const validateAuthForm = (data) => {
  const errors = {};
  for (const field in data) {
    if (!data[field]) {
      errors[field] = 'Field is required';
    }

    if (field === 'password' && !PASSWORD_RULES_REGEX.test(data[field])) {
      errors[field] = 'Password must contain uppercase and lowercase characters, number and a symbol'
    }
  }

  return {
    status: Object.keys(errors).length === 0,
    errors,
  };
}

module.exports = {
  mapDataToResponse,
  validateAuthForm,
}