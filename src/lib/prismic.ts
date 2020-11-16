import Prismic from 'prismic-javascript';

export const apiEndpoint = `${process.env.REACT_APP_API_ENDPOINT}`;

export const client = (req = undefined) => {
  const options = req ? { req } : undefined;

  return Prismic.client(apiEndpoint, options);
};
