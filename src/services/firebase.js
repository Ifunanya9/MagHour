import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyA0IVSHJi0hdSeH7CL4B3g5eJeSMvqJZAg",
    authDomain: "maghour-577d7.firebaseapp.com",
    databaseURL: "https://maghour-577d7.firebaseio.com",

  type: "service_account",
  project_id: "maghour-2e48d",
  private_key_id: "1b658a04ef805172add6a7bbd9f704623987fbd5",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDE+Q9q2752CODm\nPFtjWOiVn8OzpQlWbnRhd7hzN93JnTrJe4V0B1/G9Y1AelvfMCiJI8ZWlXQYjYD+\nGf4ro2JPDEq3kWord1d3eQdV9+DXxPhI0bolsfny/0HL0jMUsjxgt6JDwbvyAE83\ntLAIh6iaNpI3yQ+GUqBN2GtfpPjN7A4X4qgXzHwFLA7EpV24MUXgg5tRTUtim8jm\nqRVWjgR9ooTiLWDtVZ6IqkeMd8eiCvsgx2qeMppVRRIOuwjxxEzAruf3s/y0JpJt\nD1Z+4oMRYdiLN3odEUQMgqhGogkwQi3emO96FQplWLX7TqkHa65BZ5J6vICbI92d\nV5C7KG/3AgMBAAECggEAVu+sb9gEFLmvdb7vAQbFRQDKUhhF6kl/AWPjW6stLya/\nwxzLFp6IldpcGTjIItZxFbJeAGofXxTZeY2EYsNOiSAePC4ow319c+RNqhJpQSKV\nCSLT+341mRwzcJ/aXsiaIH/8VNaFuvaLAEW2KlWhw0rRt2B9AyalzSX3ojPAgrXm\nebU/KTMjKGchkjiKGvzsKH9DQ3NEUzml9Q9TQAhoNCXw0V4i7syex2CPtqmqYNIo\navC2gH8odExcPtnXJQHvVdDUvy1HY/dyRgGY4JDVgc8YyG+n+armqkaFyw4sAfWT\nlDDxu9A5Ngqw0LiZwLaTNMaj+ve1e0XeTSVWMsS9bQKBgQDiZibNy52MGFOjTI2g\nuTO5jXMfTSr32E2Awfs2IrMGdfZx+m3FiGrFEtjdMwPWQDuyfPwDLDZs/fyzZUjG\nXgHJpiUGFdT4Rp9y0zvA0f9P5LvPZPgdluXbcxRB8h1tGASh5FAGRUOhUL4l1aKO\nHOzmHfc3FKpx4vUJoSfKVId8FQKBgQDeufr3LToJaeuGAPG8jILhoikRfeWEi2hr\nbFncpEMR66sgjd1wVEBy9vRZ7PidANK4URZODCJXEzUo5hRBo/Eh8U7S11NmAB8g\nJ4n8hgPX+rtZ1maC+LGe68pqedBGZ5rdP3Dm3PYTv2y5Xknd5itAzzmaLE/I1mUT\nUWDsFsyi2wKBgQC0LzbM7TPrbuUJ/4BsnVmUYQZxsBn1fXpZcol70WwIRVQp7HT3\nFJZdWJ2uls6D80VPzfdIkySR5Cb9pCuibOkhUxD+YdvI6XQ3j/Rrhvaa4GG1Mxfh\nfNpdqJ5Dye0viUEOk8Y452Fm/vsG45tnXZARqWG6vcDVuRrqWg9wEYxu7QKBgQDH\nd54oIev5JFAXCd908g4BDt5i2PJlewiANGBiNwYOFZaDqCmqAPpbO4now06AJY2S\nHqSwLzPN8djJEQ0RIEbDFD54mvkIv5EgleiBLHBizB1fvqC+KQXCAv+bzg5WD1Fl\nVfzB9R+43dX8SVI0FX+lIjE/PvIRNtj8rQP1TBHmwwKBgQCHpA7wnW/wj64dBmuS\n4fjmBO9Gcl8aEGD0kZgoYScM7Xj8KxaGne1Iu086bDKV5tsBVfgg7S/Sk9b8syxd\n5rbmdEmVX7D9cOxtramoBU4LOWV/W21KZHXWNegUDi1uWHCpVOMdUUEluStzO5CI\ngElntOzwDukAfx1PS0t9mDceYA==\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-gy7iv@maghour-2e48d.iam.gserviceaccount.com",
  client_id: "116812996935552500278",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-gy7iv%40maghour-2e48d.iam.gserviceaccount.com",
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();