interface Users {
  id: string;
  name: string;
  age: number;
  password: string;
  email: string;
}

// Generic property -> pick

type UpdateUser = Pick<Users, "name" | "email" | "age">; // It helps to get the given details from the given interface

function updateUser(updatedProps: UpdateUser) {
  // Function to update the user details
}

// Partial -> ? -> after adding partial symbol, it is not necessary to pick the value having this sign

interface UserDetails {
  id?: string;
  name?: string;
  age?: number;
  password?: string;
  email?: string;
}

// or

type UpdatedUserDetails = Partial<UserDetails> // not necessary to pick every details from the given interface