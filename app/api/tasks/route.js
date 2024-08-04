//  app/api/tasks/route
import {NextRequest, NextResponse} from 'next/server';
import {collection, getDocs} from 'firebase/firestore';
import {db} from "../../../utils/firebaseConfig";


export async function GET(request) {
    try {
        const snapshot = await getDocs(collection(db, 'tasks'));
        const tasks = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return NextResponse.json(tasks, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const {label, archived} = await request.json();
        const docRef = await db.collection('tasks').add({label, archived});
        const doc = await docRef.get();
        return new Response(JSON.stringify({id: doc.id, ...doc.data()}), {status: 201});
    } catch (error) {
        return new Response(JSON.stringify({error: error.message}), {status: 500});
    }
}

export async function PUT(request) {
    try {
        const {id, label, archived} = await request.json();
        const docRef = db.collection('tasks').doc(id);
        await docRef.update({label, archived});
        const doc = await docRef.get();
        return new Response(JSON.stringify({id: doc.id, ...doc.data()}), {status: 200});
    } catch (error) {
        return new Response(JSON.stringify({error: error.message}), {status: 500});
    }
}

export async function DELETE(request) {
    try {
        const {id} = await request.json();
        await db.collection('tasks').doc(id).delete();
        return new Response(JSON.stringify({id}), {status: 200});
    } catch (error) {
        return new Response(JSON.stringify({error: error.message}), {status: 500});
    }
}
