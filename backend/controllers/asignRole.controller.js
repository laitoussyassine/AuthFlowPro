import User from '../models/User.model.js';
import Role from '../models/Role.model.js';

const assignRole = async (req , res) => {
    try {
        const { userId, roleId } = req.params;
        const user = await User.findById(userId);
        const role = await Role.findById(roleId);
        if (!user || !role) {
            return res.status(404).json({success : false , message: 'User or Role not found' });
        }
        user.role = role._id;
        await user.save();
        res.status(200).json({success : true , message: 'Role assigned to user successfully' });
    } catch (error) {
        res.status(500).json({success : false , error });
    }
};

export default assignRole;