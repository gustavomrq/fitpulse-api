<x-app-layout>
    <x-slot name="header">
        <h2 style="font-family:'Bebas Neue',sans-serif; font-size:28px; letter-spacing:3px; color:#fff; margin:0;">
            DASHBOARD
        </h2>
    </x-slot>

    <style>
        body { background: #0a0a0a !important; }
    </style>

    <div style="min-height: calc(100vh - 120px); background: #0a0a0a; padding: 40px 24px; font-family: 'Montserrat', sans-serif;">
        <div style="max-width: 1150px; margin: 0 auto;">
            <div style="
                background: rgba(255,255,255,0.03);
                border: 1px solid rgba(255,255,255,0.10);
                border-radius: 18px;
                padding: 28px 32px;
                color: rgba(255,255,255,0.85);
                font-size: 15px;
                font-weight: 500;
            ">
                {{ __("You're logged in!") }}
            </div>
        </div>
    </div>

</x-app-layout>