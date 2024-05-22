import  {  Config,  getFunctions,  getSchemaCreator  }  from  "nobox-client";

const endpoint = process.env.NEXT_PUBLIC_NOBOX_API || "https://api.nobox.cloud";
const project = process.env.NEXT_PUBLIC_NOBOX_PROJECT || "nafa_space"
const token = process.env.NEXT_PUBLIC_NOBOX_TOKEN;


if (!token) throw new Error("Nobox token required!");


export const config: Config = {
    endpoint,
    project,
    token
};

export const createRowSchema = getSchemaCreator(config, { type: "rowed" });

export  const  Nobox  =  getFunctions(config);
