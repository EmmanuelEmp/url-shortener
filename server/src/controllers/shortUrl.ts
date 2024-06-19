import express from "express";
import Url from "../model/url";

export const createUrl = async (req: express.Request, res: express.Response) => {
    try {
        const { fullUrl } = req.body;
        const urlExist = await Url.find({ fullUrl });
        if(urlExist.length > 0){
            res.status(409).send(urlExist)
        } else {
            const shortUrl = await Url.create({ fullUrl })
            res.status(201).send(shortUrl)
        }
    } catch (error) {
        console.log(error)
        throw new Error("something went wrong");
     
    }
}

export const getAllUrl = async (req: express.Request, res: express.Response) => {
    try {
        const urls = await Url.find();
        if(urls.length < 0) {
            res.status(404).send({ message: "No url found"});
        }else {
            res.status(200).send(urls);
        }
        
    } catch (error) {
        console.log(error)
        throw new Error("something went wrong");
      
    }
}

export const getUrl = async (req: express.Request, res: express.Response) => {

    try {
        const shortUrl = await Url.findOne({ shortUrl: req.params.id});
        if(!shortUrl){
            res.status(404).send({message: "Full Url not found"})
        } else{
            shortUrl.clicks++;
            shortUrl.save();
            res.redirect(`${shortUrl.fullUrl}`);
        }
    } catch (error) {
        console.log(error)
        throw new Error("something went wrong")
    }
}

export const deleteUrl = async (req: express.Request, res: express.Response) => {
   try {
        const url = await Url.findByIdAndDelete({_id: req.params.id})
        if(url){
            res.status(200).send({message: "Url deleted successfully"})
        }                        
   } catch (error) {
        console.log(error)
        throw new Error("something went wrong");
   }
}