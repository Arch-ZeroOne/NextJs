import React from "react";

//Here in the left side we are destructruring and in the right side we are adding the type for our params
const UserDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return (
    <div>
        
      <h1>Showing details for user # {id}</h1>
    </div>
  );
};

export default UserDetails;
