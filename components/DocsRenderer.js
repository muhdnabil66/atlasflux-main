// components/DocsRenderer.js
"use client";

import FaqSection from "./FaqSection";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";

// Helper untuk render list (ul/ol)
const RenderList = ({ items, ordered = false }) => {
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag className="list-disc pl-6 mb-4 space-y-1 text-gray-400">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </Tag>
  );
};

// Helper untuk tabel tools
const ToolsTable = ({ tools }) => (
  <div className="overflow-x-auto my-4 border border-white/10 rounded-lg">
    <table className="min-w-full text-sm text-left">
      <thead className="bg-white/5 text-gray-300">
        <tr>
          <th className="px-4 py-2 border-b border-white/10">Tool</th>
          <th className="px-4 py-2 border-b border-white/10">Cost</th>
          <th className="px-4 py-2 border-b border-white/10">Description</th>
        </tr>
      </thead>
      <tbody>
        {tools.map((tool, idx) => (
          <tr key={idx} className="hover:bg-white/5 transition">
            <td className="px-4 py-2 border-b border-white/5 font-medium">
              {tool.tool}
            </td>
            <td className="px-4 py-2 border-b border-white/5 text-purple-300">
              {tool.cost}
            </td>
            <td className="px-4 py-2 border-b border-white/5 text-gray-400">
              {tool.desc}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// Model catalog item
const ModelItem = ({ name, use }) => (
  <div className="border-l-2 border-gray-700 pl-4 mb-3">
    <p className="font-semibold">{name}</p>
    <p className="text-sm text-gray-400">{use}</p>
  </div>
);

// Komponen utama
export default function DocsRenderer({ data }) {
  return (
    <div className="space-y-12">
      {/* Introduction */}
      <section id="introduction">
        <h2 className="text-3xl font-bold mb-4">{data.intro_title}</h2>
        <p className="text-gray-300 mb-3">{data.intro_text1}</p>
        <p className="text-gray-300 mb-3">{data.intro_text2}</p>
        <p className="text-gray-300 mb-3">{data.intro_text3}</p>
      </section>

      {/* Getting Started */}
      <section id="getting-started">
        <h2 className="text-3xl font-bold mb-4">{data.gs_title}</h2>
        <p className="text-gray-300 mb-4">{data.gs_text1}</p>
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">{data.gs_guest}</h3>
            <p className="text-gray-400">{data.gs_guest_desc}</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">{data.gs_signup}</h3>
            <p className="text-gray-400">{data.gs_signup_desc}</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Interface Overview</h3>
            <p className="text-gray-400">{data.gs_interface_desc}</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">
              {data.gs_tools_hub_title}
            </h3>
            <p className="text-gray-400">{data.gs_tools_hub_desc}</p>
          </div>
        </div>
      </section>

      {/* AI Chat */}
      <section id="ai-chat">
        <h2 className="text-3xl font-bold mb-4">{data.chat_title}</h2>
        <p className="text-gray-300 mb-6">{data.chat_overview}</p>

        <h3 className="text-2xl font-semibold mb-2">{data.chat_howto}</h3>
        <p className="text-gray-400 mb-4">{data.chat_howto_desc}</p>

        <h3 className="text-2xl font-semibold mb-2">
          {data.chat_file_support}
        </h3>
        <p className="text-gray-400 mb-2">{data.chat_file_support_desc}</p>
        <RenderList items={data.chat_file_items} />

        <h3 className="text-2xl font-semibold mb-2">{data.chat_auto_manual}</h3>
        <p className="text-gray-400 mb-4">{data.chat_auto_manual_desc}</p>

        <h3 className="text-2xl font-semibold mb-2">Token Limits</h3>
        <p className="text-gray-400 mb-4">{data.chat_token_limit_desc}</p>

        <h3 className="text-2xl font-semibold mb-2">
          {data.chat_message_actions}
        </h3>
        <p className="text-gray-400 mb-2">{data.chat_message_actions_desc}</p>
        <RenderList items={data.chat_actions_list} />
        <p className="text-gray-400">{data.chat_stop}</p>
      </section>

      {/* Chat Modes */}
      <section id="modes">
        <h2 className="text-3xl font-bold mb-4">{data.modes_title}</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-2">
              {data.modes_deepsearch_title}
            </h3>
            <p className="text-gray-400 mb-2">{data.modes_deepsearch_desc}</p>
            <p className="text-sm text-gray-500 italic">
              {data.modes_deepsearch_use}
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">
              {data.modes_research_title}
            </h3>
            <p className="text-gray-400 mb-2">{data.modes_research_desc}</p>
            <p className="text-sm text-gray-500 italic">
              {data.modes_research_use}
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">
              {data.modes_reasoning_title}
            </h3>
            <p className="text-gray-400 mb-2">{data.modes_reasoning_desc}</p>
            <p className="text-sm text-gray-500 whitespace-pre-line">
              {data.modes_reasoning_why}
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">
              {data.modes_bigt_title}
            </h3>
            <p className="text-gray-400">{data.modes_bigt_desc}</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">
              {data.modes_coding_title}
            </h3>
            <p className="text-gray-400 mb-2">{data.modes_coding_desc}</p>
            <RenderList items={data.modes_coding_combos} />
          </div>
        </div>
      </section>

      {/* Previews */}
      <section id="previews">
        <h2 className="text-3xl font-bold mb-4">{data.previews_title}</h2>
        <h3 className="text-2xl font-semibold mb-2">HTML/CSS/JS Preview</h3>
        <p className="text-gray-400 mb-3">{data.previews_code_html}</p>
        <h3 className="text-2xl font-semibold mb-2">File Preview</h3>
        <p className="text-gray-400 mb-3">{data.previews_file}</p>
        <h3 className="text-2xl font-semibold mb-2">Source Preview</h3>
        <p className="text-gray-400">{data.previews_sources}</p>
      </section>

      {/* Image Generation */}
      <section id="image-generation">
        <h2 className="text-3xl font-bold mb-4">{data.image_title}</h2>
        <p className="text-gray-400 mb-2">{data.image_intro}</p>
        <p className="text-sm text-gray-500 italic mb-6">
          {data.image_pricing_note}
        </p>
        <h3 className="text-2xl font-semibold mb-2">
          {data.image_choose_model}
        </h3>
        <p className="text-gray-400 mb-3">{data.image_choose_model_desc}</p>
        <h3 className="text-2xl font-semibold mb-2">Image‑to‑Image</h3>
        <p className="text-gray-400 mb-3">{data.image_img2img_desc}</p>
        <h3 className="text-2xl font-semibold mb-2">{data.image_settings}</h3>
        <p className="text-gray-400 mb-3">{data.image_settings_desc}</p>
        <h3 className="text-2xl font-semibold mb-2">Image History</h3>
        <p className="text-gray-400 mb-3">{data.image_history_desc}</p>
        <h3 className="text-2xl font-semibold mb-2">Community Auto‑Share</h3>
        <p className="text-gray-400">{data.image_community_desc}</p>
      </section>

      {/* Video Generation */}
      <section id="video-generation">
        <h2 className="text-3xl font-bold mb-4">{data.video_title}</h2>
        <p className="text-gray-400 mb-2">{data.video_intro}</p>
        <p className="text-sm text-gray-500 italic mb-6">
          {data.video_pricing_note}
        </p>
        <h3 className="text-2xl font-semibold mb-2">
          {data.video_choose_model}
        </h3>
        <p className="text-gray-400 mb-3">{data.video_choose_model_desc}</p>
        <h3 className="text-2xl font-semibold mb-2">{data.video_settings}</h3>
        <p className="text-gray-400 mb-3">{data.video_settings_desc}</p>
        <h3 className="text-2xl font-semibold mb-2">Input Types</h3>
        <p className="text-gray-400 mb-2">{data.video_inputs_desc}</p>
        <RenderList items={data.video_inputs_list} />
        <h3 className="text-2xl font-semibold mb-2">Video History</h3>
        <p className="text-gray-400">{data.video_history_desc}</p>
      </section>

      {/* Tools Table */}
      <section id="tools-table">
        <h2 className="text-3xl font-bold mb-4">{data.tools_title}</h2>
        <p className="text-gray-400 mb-4">{data.tools_intro}</p>
        <ToolsTable tools={data.tools_table} />
      </section>

      {/* File Uploads */}
      <section id="file-uploads">
        <h2 className="text-3xl font-bold mb-4">File Uploads</h2>
        <h3 className="text-2xl font-semibold mb-2">Supported File Types</h3>
        <RenderList items={data.chat_file_items} />
        <h3 className="text-2xl font-semibold mb-2">Size & Quantity</h3>
        <RenderList
          items={[
            "No daily limits – only per‑message limits.",
            "Images: up to 5 per message, 20 MB each.",
            "Documents: up to 50 MB.",
            "Text/code: up to 10 MB.",
          ]}
        />
        <h3 className="text-2xl font-semibold mb-2">How to Attach</h3>
        <RenderList
          items={[
            "Click the Plus (➕) button in the chat input area.",
            "Choose 'Upload Image' or 'Upload Document'.",
            "Select files from your device.",
            "Click the ✕ on any preview to remove it before sending.",
          ]}
          ordered
        />
      </section>

      {/* Model Catalog */}
      <section id="model-catalog">
        <h2 className="text-3xl font-bold mb-4">{data.models_title}</h2>
        <p className="text-gray-400 mb-6">{data.models_intro}</p>
        <h3 className="text-2xl font-semibold mb-3">{data.models_chat}</h3>
        <div className="space-y-2 mb-6">
          {data.models_chat_list.map((m, i) => (
            <ModelItem key={`chat-${i}`} name={m.name} use={m.use} />
          ))}
        </div>
        <h3 className="text-2xl font-semibold mb-3">{data.models_image}</h3>
        <div className="space-y-2 mb-6">
          {data.models_image_list.map((m, i) => (
            <ModelItem key={`img-${i}`} name={m.name} use={m.use} />
          ))}
        </div>
        <h3 className="text-2xl font-semibold mb-3">{data.models_video}</h3>
        <div className="space-y-2">
          {data.models_video_list.map((m, i) => (
            <ModelItem key={`vid-${i}`} name={m.name} use={m.use} />
          ))}
        </div>
      </section>

      {/* Credit System */}
      <section id="credit-system">
        <h2 className="text-3xl font-bold mb-4">{data.credit_title}</h2>
        <h3 className="text-2xl font-semibold mb-2">{data.credit_daily}</h3>
        <p className="text-gray-400 mb-3">{data.credit_daily_desc}</p>
        <h3 className="text-2xl font-semibold mb-2">{data.credit_bonus}</h3>
        <p className="text-gray-400 mb-2">{data.credit_bonus_desc}</p>
        <RenderList
          items={[
            "Welcome bonus: 120 credits on first sign‑in.",
            "Referral: 50 credits for referrer, 30 for referred.",
            "Purchased credit packs.",
            "Special promotions.",
          ]}
        />
        <p className="text-gray-400 mb-4">{data.credit_order}</p>
        <h3 className="text-2xl font-semibold mb-2">Token‑Based Pricing</h3>
        <p className="text-gray-400 mb-4">{data.credit_token_pricing_desc}</p>
        <h3 className="text-2xl font-semibold mb-2">Automatic Refunds</h3>
        <p className="text-gray-400">{data.credit_refund_desc}</p>
      </section>

      {/* MYR Wallet */}
      <section id="myr-wallet">
        <h2 className="text-3xl font-bold mb-4">{data.myr_wallet_title}</h2>
        <p className="text-gray-400 mb-6">{data.myr_wallet_desc}</p>
        <h3 className="text-2xl font-semibold mb-2">{data.myr_topup_title}</h3>
        <p className="text-gray-400 mb-4">{data.myr_topup_desc}</p>
        <h3 className="text-2xl font-semibold mb-2">{data.myr_usage_title}</h3>
        <p className="text-gray-400 mb-4">{data.myr_usage_desc}</p>
        <h3 className="text-2xl font-semibold mb-2">
          {data.myr_history_title}
        </h3>
        <p className="text-gray-400 mb-4">{data.myr_history_desc}</p>
        <div className="bg-white/5 border border-white/10 p-4 rounded-lg mt-6">
          <p className="font-semibold mb-2">Key Advantages</p>
          <RenderList items={data.myr_advantages} />
        </div>
      </section>

      {/* Purchases */}
      <section id="purchases">
        <h2 className="text-3xl font-bold mb-4">{data.purchase_title}</h2>
        <p className="text-gray-400 mb-3">{data.purchase_packs_intro}</p>
        <RenderList items={data.purchase_packs} />
        <h3 className="text-2xl font-semibold mb-2">
          {data.purchase_process_title}
        </h3>
        <RenderList items={data.purchase_process} ordered />
        <p className="text-gray-500 text-sm italic">{data.purchase_refund}</p>
      </section>

      {/* Referral */}
      <section id="referral">
        <h2 className="text-3xl font-bold mb-4">{data.referral_title}</h2>
        <p className="text-gray-400 mb-2">{data.referral_how}</p>
        <RenderList items={data.referral_bonuses} />
      </section>

      {/* Account */}
      <section id="account">
        <h2 className="text-3xl font-bold mb-4">{data.account_title}</h2>
        <p className="text-gray-400 mb-2">{data.account_desc}</p>
        <RenderList items={data.account_items} />
      </section>

      {/* Preferences */}
      <section id="preferences">
        <h2 className="text-3xl font-bold mb-4">{data.preferences_title}</h2>
        <p className="text-gray-400 mb-4">{data.preferences_desc}</p>
        <ul className="space-y-2 text-gray-400">
          <li>{data.preferences_lang}</li>
          <li>{data.preferences_theme}</li>
          <li>{data.preferences_notifications}</li>
          <li>{data.preferences_memory}</li>
          <li>{data.preferences_voice}</li>
          <li>{data.preferences_instructions}</li>
          <li>{data.preferences_autoshare}</li>
        </ul>
      </section>

      {/* Data Export & Import */}
      <section id="data-export" className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Data Export & Import</h2>
        <p className="text-gray-400">
          AtlasFlux AI provides full data portability ....
        </p>
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Full Data Export</h3>
          <p className="text-gray-400">Request a complete archive ...</p>
          <h3 className="text-2xl font-semibold">Chat Export (Atlas Key)</h3>
          <p className="text-gray-400">Export only your chat history ...</p>
          <h3 className="text-2xl font-semibold">Import Chat</h3>
          <p className="text-gray-400">To import a chat export ...</p>
          <h3 className="text-2xl font-semibold">Import AI Memory</h3>
          <p className="text-gray-400">You can import conversation data ...</p>
          <h3 className="text-2xl font-semibold">Delete All Chats & Account</h3>
          <p className="text-gray-400">
            You have the option to permanently delete ...
          </p>
        </div>
      </section>

      {/* Security */}
      <section id="security">
        <h2 className="text-3xl font-bold mb-4">{data.security_title}</h2>
        <p className="text-gray-400 mb-4">{data.security_desc}</p>
        <ul className="space-y-2 text-gray-400">
          <li>{data.security_mfa}</li>
          <li>{data.security_passkeys}</li>
          <li>{data.security_password}</li>
          <li>{data.security_sessions}</li>
          <li>{data.security_email_phone}</li>
        </ul>
      </section>

      {/* Archived & AF Code */}
      <section id="archived" className="space-y-4">
        <h2 className="text-3xl font-bold">{data.archived_title}</h2>
        <p className="text-gray-400">{data.archived_desc}</p>
      </section>

      <section id="afcode">
        <h2 className="text-3xl font-bold mb-2">{data.afcode_title}</h2>
        <p className="text-gray-400">{data.afcode_desc}</p>
      </section>

      {/* Community */}
      <section id="community">
        <h2 className="text-3xl font-bold mb-4">{data.comm_title}</h2>
        <p className="text-gray-400 mb-4">{data.comm_intro}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: data.comm_feed_title, desc: data.comm_feed_desc },
            {
              title: data.comm_autoshare_title,
              desc: data.comm_autoshare_desc,
            },
            { title: data.comm_recreate_title, desc: data.comm_recreate_desc },
            {
              title: data.comm_moderation_title,
              desc: data.comm_moderation_desc,
            },
            { title: data.comm_profile_title, desc: data.comm_profile_desc },
            { title: data.comm_explore_title, desc: data.comm_explore_desc },
            { title: data.comm_saved_title, desc: data.comm_saved_desc },
            { title: data.comm_follow_title, desc: data.comm_follow_desc },
            {
              title: data.comm_notifications_title,
              desc: data.comm_notifications_desc,
            },
            {
              title: data.comm_migration_title,
              desc: data.comm_migration_desc,
            },
          ].map((item, i) => (
            <div key={i} className="border border-white/10 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PWA */}
      <section id="pwa">
        <h2 className="text-3xl font-bold mb-4">{data.pwa_title}</h2>
        <p className="text-gray-400 mb-2">{data.pwa_desc}</p>
        <RenderList items={data.pwa_steps} />
      </section>

      {/* Support & Legal */}
      <section id="support">
        <h2 className="text-3xl font-bold mb-4">{data.support_title}</h2>
        <p className="text-gray-400 mb-2">{data.support_contact}</p>
        <p className="text-gray-400">{data.support_ai}</p>
      </section>

      <section id="legal">
        <h2 className="text-3xl font-bold mb-4">{data.legal_title}</h2>
        <p className="text-gray-400 mb-2">{data.legal_desc}</p>
        <RenderList items={data.legal_list} />
      </section>

      {/* Updates */}
      <section id="updates">
        <h2 className="text-3xl font-bold mb-4">{data.updates_title}</h2>
        <p className="text-gray-400">{data.updates_desc}</p>
      </section>

      {/* FAQ – GUNAKAN KOMPONEN BERASINGAN */}
      <section id="faq">
        <h2 className="text-3xl font-bold mb-6">{data.faq_title}</h2>
        <FaqSection faqs={data.faq} />
      </section>

      {/* Troubleshooting */}
      <section id="troubleshooting">
        <h2 className="text-3xl font-bold mb-4">{data.troubleshoot_title}</h2>
        <RenderList items={data.troubleshoot_items} />
      </section>

      {/* Limitations */}
      <section id="limitations">
        <h2 className="text-3xl font-bold mb-4">{data.limitations_title}</h2>
        <RenderList items={data.limitations_items} />
      </section>

      {/* Last Updated */}
      <p className="text-sm text-gray-600 italic pt-8 border-t border-white/10">
        {data.last_updated}
      </p>
    </div>
  );
}
