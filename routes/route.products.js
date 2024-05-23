//Create express Router
import express from 'express';
import { findAll, findOne , addOne, updateOne, removeOne} from '../controllers/controller.product';

const router = express.Router();


router.get('/:id?', async ( req, res, next) => { 

    try {
        
        const { id } = req.params;
        let result;

        if (id) {
            
            result = await findOne(id);

        } else {

            result = await findAll();

        }


        res.json(result);

    } catch (err) {

        next(err)

    }
    
});


router.post("/", async (req, res, next) => {
  try {
    
        const data = req.body;
    
        if(data){
            
            const result = await addOne(data);
            res.json(result);

        } else {

            res.json({ msg: 'Error: No Update Data' });

        }
        
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {

    try {

        const data = req.body;
        const { id } = req.params;

        if (id && data) {
            
            const result = await updateOne(id, data);
            res.json(result);

        } else {

            res.json({ msg: "Error: No Update or ID Data" });

        }

        

    } catch (err) {

        next(err);
    }
});

router.delete("/:id", async (req, res, next) => {
 
    try {
       
        const { id } = req.params;

        if (id) {
            
            const result = await removeOne(id);
            res.json(result);

        } else {

            res.json({ msg: "Error: No Update Data" });
            
        }

      } catch (err) {
         next(err);
      }
});


//Export your router
export default router;