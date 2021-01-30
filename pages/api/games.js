import { GoogleSpreadsheet } from 'google-spreadsheet';
import credentials from '../../credentials/google-sheets-api.json';

export default async function Games(req,res){
    const doc = new GoogleSpreadsheet('1624-0ALq_G_GFAYTi_rLbngd_DhIykZL4yxNN7VG2FM');

    await doc.useServiceAccountAuth({
        client_email: credentials.client_email,
        private_key: credentials.private_key,
    });

    await doc.loadInfo(); // Carrega a info da planilha
    const sheet = doc.sheetsByIndex[0];

    const rows = await sheet.getRows()
    const games = rows.map(({ name,image }) => {
        return { 
            name,
            image 
        }
    })

    res.send({
        title:doc.title,
        games
    })
}