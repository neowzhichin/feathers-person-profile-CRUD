// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

const { Console } = require("winston/lib/winston/transports");

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const {data} = context;

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
      
      if (checkexist.data.length > 0)
      {
        if (checkexist.data[0]._id.toString() === context.id)
        {
          throw new Error('Your New nickname is same as old nickname');
        }
        else
        {
          throw new Error('This nickname has been taken');
        }
          
      }
      
    }

    return context;
  };
};
