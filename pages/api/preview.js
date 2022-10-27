export default function handler(req,res){
    res.setPreviewData({user:'Mani'})
    res.redirect(req.query.redirect)
    //res.end('Preview mode on')
}