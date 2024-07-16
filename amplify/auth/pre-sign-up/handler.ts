import type { PreSignUpTriggerHandler } from "aws-lambda";

export const handler: PreSignUpTriggerHandler = async (event) => {
  const email = event.request.userAttributes["email"];
  console.log(event);

  if (!email.endsWith("hello")) {
    throw new Error("Invalid email domain");
  }

  return event;
};
