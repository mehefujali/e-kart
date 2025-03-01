type UserProps = {
      name : string ,
      age: number ,
      email: string ,
      gender: string,
}
const User = ({name,age,email,gender}:UserProps) => {
      return (
            <div>
                 {name}
                 {email}
                 {age}
                 {gender}
            </div>
      );
};

export default User;