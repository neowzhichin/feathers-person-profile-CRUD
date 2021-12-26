// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const {data} = context;
    if(!data.name)
    {
      throw new Error('Name is required');
    }
    if(!data.password)
    {
      throw new Error('Password is required');
    }
    else
    {
      pw_validation(data.password)
    }
    if(data.nickname !="" && data.nickname!=null)
    {
      let checkexist = await context.app.service('person').find({
        query: {
          nickname: data.nickname
        }
      }).then(result => {
        return result;
      }).
      catch(function () {
          console.log('Some error has occurred');
      });
      
      if (checkexist.data.length>0)
      {
        throw new Error('This nickname has been taken');
      }

    }
    
    return context;
  };
};

function pw_validation(pw)
{
  if (pw.length < 12 || pw.length > 16) 
  {
    throw new Error("Your password must between 12 to 16 characters");
  }
  if (pw.search(/[a-z]/i) < 0) 
  {
    throw new Error("Your password must contain at least one letter");
  }
  if (pw.search(/[0-9]/) < 0) 
  {
    throw new Error("Your password must contain at least one digit."); 
  }
  if (pw.search(/[A-Z]/) < 0 )
  {
    throw new Error("Your password must contain at least one capital letter.");
  }
  if (pw.search(/[^A-Za-z0-9]/)< 0 )
  {
    throw new Error("Your password must contain at least one special character");
  }

}