import Reserva from '../models/reserva.js'

export const getReservas = async (req, res) => {
    const reservas = await Reserva.find()
    res.json(reservas)
}

export const createReserva = async (req, res) => {
    try {
        const { cancha, fecha, horario } = req.body;

        const existe = await Reserva.findOne({ cancha, fecha, horario });

        if (existe) {
            return res.status(409).json({
                message: "Ya existe una reserva en esa cancha, fecha y horario."
            });
        }

        const reserva = new Reserva(req.body);
        await reserva.save();

        return res.status(201).json(reserva);
    } catch (error) {
        return res.status(500).json({ message: "Error al crear reserva" });
    }
};


export const updateReserva = async (req, res) => {
    try {
        const { cancha, fecha, horario } = req.body;
        const id = req.params.id;

        const existe = await Reserva.findOne({
            cancha,
            fecha,
            horario,
            _id: { $ne: id }
        });

        if (existe) {
            return res.status(409).json({
                message: "Ya existe una reserva en esa cancha, fecha y horario."
            });
        }

        const reserva = await Reserva.findByIdAndUpdate(id, req.body, { new: true });

        if (!reserva) {
            return res.status(404).json({ message: "Reserva no encontrada" });
        }

        return res.status(200).json(reserva);
    } catch (error) {
        return res.status(500).json({ message: "Error al actualizar reserva" });
    }
};

export const deleteReserva = async (req, res) => {
    const reserva = await Reserva.findByIdAndDelete(req.params.id)
    res.json(reserva)
}
